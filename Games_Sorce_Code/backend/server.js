const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const path = require('path');
app.use('/images', express.static(path.join(__dirname, '../../../public/images')));
app.use(express.static(path.join(__dirname, '../../../public')));



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jinal@4086",
    database: "game_store"
});

// Add to cart
app.post("/add-to-cart", (req, res) => {
    console.log("Received add-to-cart:", req.body);
    const { game_id,price } = req.body;
    
    if (!game_id || !price) {
        return res.status(400).json({ message: "Missing game_id or price" });
    }

    db.query("SELECT * FROM cart WHERE game_id = ?", [game_id], (err, result) => {
        if (err) return res.status(500).json(err);
    

        if (result.length > 0) {
            // Update quantity if already in cart
            db.query("UPDATE cart SET quantity = quantity + 1, total_price = total_price + ? WHERE game_id = ?", 
            [price,game_id], 
            (err, updateResult) => {
                if (err) return res.status(500).json(err);
                return res.json({ message: "Cart updated successfully!" });
            });
        } else {
            // Insert new item
            db.query("INSERT INTO cart (game_id,quantity,total_price) VALUES (?, 1, ?)", 
            [game_id,price], 
            (err, insertResult) => {
                if (err) return res.status(500).json(err);
                return res.json({ message: "Game added to cart!" });
            });
        }
    });
});

// Fetch Cart Items
app.get("/cart", (req, res) => {
    db.query("SELECT cart.*, games.name,CONCAT('http://localhost:5000/images/', games.image) AS image  FROM cart JOIN games ON cart.game_id = games.id", 
    (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Delete from Cart
app.delete("/cart/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM cart WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: "Item removed from cart!" });
    });
});

// Update quantity of a cart item
app.put("/cart/:id", (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity <= 0) {
        return res.status(400).json({ message: "Quantity must be at least 1." });
    }

    // First get the unit price from total_price / quantity
    db.query("SELECT total_price, quantity FROM cart WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Item not found." });

        const unitPrice = results[0].total_price / results[0].quantity;
        const newTotal = (unitPrice * quantity).toFixed(2);

        db.query(
            "UPDATE cart SET quantity = ?, total_price = ? WHERE id = ?",
            [quantity, newTotal, id],
            (err, result) => {
                if (err) return res.status(500).json(err);
                res.json({ message: "Quantity updated!" });
            }
        );
    });
});


// Get cart items
app.get('/api/cart', (req, res) => {
    const query = `
      SELECT cart.*, games.name AS game_name
      FROM cart
      JOIN games ON cart.game_id = games.id
    `;
    db.query(query, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json(result);
    });
  });
  
  // Place order
  app.post('/api/checkout', (req, res) => {
    const {
      first_name, last_name, company_name, country,
      phone, email, notes
    } = req.body;
  
    console.log('✅ Checkout data received:', req.body);
  
    const cartQuery = `
      SELECT cart.*, games.name AS game_name
      FROM cart
      JOIN games ON cart.game_id = games.id
    `;
  
    db.query(cartQuery, (err, cartItems) => {
      if (err) {
        console.error("❌ Error fetching cart:", err);
        return res.status(500).json({ error: err });
      }
  
      const total_price = cartItems.reduce((sum, item) => sum + parseFloat(item.total_price), 0);
      console.log("🛒 Cart Items:", cartItems);
      console.log("💰 Total Price:", parseFloat(total_price));
  
      const orderQuery = `
        INSERT INTO orders (first_name, last_name, company_name, country, phone, email, notes, total_price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
  
      const orderData = [first_name, last_name, company_name, country, phone, email, notes, total_price];
  
      db.query(orderQuery, orderData, (err, result) => {
        if (err) {
          console.error("❌ Error inserting order:", err);
          return res.status(500).json({ error: err });
        }
  
        const orderId = result.insertId;
        console.log("✅ Order inserted with ID:", orderId);
  
        const orderItems = cartItems.map(item => [
          orderId,
          item.game_name,
          item.quantity,
          item.total_price / item.quantity,
          item.total_price
        ]);
  
        const itemQuery = `
          INSERT INTO order_items (order_id, game_name, quantity, price, total)
          VALUES ?
        `;
  
        db.query(itemQuery, [orderItems], (err) => {
          if (err) {
            console.error("❌ Error inserting order items:", err);
            return res.status(500).json({ error: err });
          }
  
          db.query('DELETE FROM cart', (err) => {
            if (err) {
              console.error("❌ Error clearing cart:", err);
              return res.status(500).json({ error: err });
            }
            console.log("🧪 Order Items to Insert:", orderItems);
            console.log("✅ Order placed and cart cleared!");
            return res.json({ success: true, message: 'Order placed successfully!' });
          });
        });
      });
    });
  });
  


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
