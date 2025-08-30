import React from 'react'
import Image from '../Images/App_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './WordConnectStore.css';
import FruitCutStore1 from '../Images/Fruit-Cut-Store.webp';
import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';

function StoreHeader(){
    return(
      <>
       <div className='StoreHeader'>
        <img src={Image} className='logo' alt='logo'/>
      <ul className='headerul'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about-us'}>About Us</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/potfolio'}>Portfolio</Link></li>
        <li><Link to={'/contact-us'}>Contact Us</Link></li>
        <li><Link to={'/store'}>Store</Link></li>
      </ul>
      </div>
      </>
    )
  }

  function WCTable(){

    const addToCart = async (game_id, price) => {
      try {
          const response = await fetch("http://localhost:5000/add-to-cart", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ game_id, price })
          });
          const data = await response.json();
          alert(data.message);
      } catch (error) {
          console.error("Error:", error);
      }
  };

    return(
      <>
      <table className='WCTable'>
        <tr>
          <td>
            <center><h1>FRUIT CUT</h1></center>
          </td>
        </tr>
        <tr>
          <td>
          <img src={FruitCutStore1} alt='' className='StoreImg1'/>
          </td>
          <td>
            <div className='WCDiv'>
            <h1>Fruit Cut</h1>
            <h2 className='priceh1'>₹69,999.99</h2>
            <p><FontAwesomeIcon icon={faArrowsToDot} /> Slice through colorful fruits.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Avoid bombs to keep playing.
            <br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Addictive gameplay with exciting rewards.
            </p>
            <div className='ContainorBtn'>
            <p onClick={() => addToCart(3, 69999.99)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></p>
            <p><a href='http://localhost:5000/cart.html' className='ademo'>View Cart</a></p>
            <p><a href='https://apps.apple.com/us/app/fruit-cut-tap-to-jump-puzzle/id6738338722' className='ademo'>View Demo <FontAwesomeIcon icon={faAngleRight} /></a></p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

  const  FruitCutStore= () => {
      useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
     
      return (
        <>
        <StoreHeader/>
        <WCTable/>
        <GameDiv/>
        <Footer/>
        </>
      )
    }
    export default FruitCutStore;