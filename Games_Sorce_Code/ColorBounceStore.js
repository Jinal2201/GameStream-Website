import React from 'react'
import Image from '../Images/App_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './WordConnectStore.css';
import ColorBounceStore1 from '../Images/Color-Bounce-Store.png';
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
          alert(data.message || "no message from server");
      } catch (error) {
          console.error("Error:", error);
      }
  };

    return(
      <>
      <table className='WCTable'>
        <tr>
          <td>
            <center><h1>COLOR BOUNCE</h1></center>
          </td>
        </tr>
        <tr>
          <td>
          <img src={ColorBounceStore1} alt='' className='StoreImg1'/>
          </td>
          <td>
            <div className='WCDiv'>
            <h1>Color Bounce</h1>
            <h2 className='priceh1'>₹59,999.99</h2>
            <p><FontAwesomeIcon icon={faArrowsToDot} /> Simple tap-to-play mechanics.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Vibrant paths and dynamic obstacles.
            <br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Endless fun with increasing challenges.
            </p>
            <div className='ContainorBtn'>
            <p onClick={() => addToCart(2, 59999.99)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></p>
            <p><a href='http://localhost:5000/cart.html' className='ademo'>View Cart</a></p>
            <p><a href='https://play.google.com/store/apps/details?id=com.gneabit.colorrun' className='ademo'>View Demo <FontAwesomeIcon icon={faAngleRight} /></a></p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

  const  ColorBounceStore= () => {
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
    export default ColorBounceStore;