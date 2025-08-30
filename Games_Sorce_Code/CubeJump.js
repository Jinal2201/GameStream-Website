import React from 'react'
import Image from '../Images/App_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './WordConnectStore.css';
import CubeJumpStore1 from '../Images/Cube-Jump-Store.png';
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
            <center><h1>CUBE JUMP</h1></center>
          </td>
        </tr>
        <tr>
          <td>
          <img src={CubeJumpStore1} alt='' className='StoreImg1'/>
          </td>
          <td>
            <div className='WCDiv'>
            <h1>Cube Jump</h1>
            <h2 className='priceh1'>₹45,999.99</h2>
            <p><FontAwesomeIcon icon={faArrowsToDot} /> Easy-to-learn controls but challenging to master.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Perfect for quick gaming sessions or long play marathons.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Compete with friends and players worldwide on the leaderboards.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> A revive system that lets you keep pushing forward.
            </p>
            <div className='ContainorBtn'>
            <p onClick={() => addToCart(4, 45999.99)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></p>
            <p><a href='http://localhost:5000/cart.html' className='ademo'>View Cart</a></p>
            <p><a href='https://play.google.com/store/apps/details?id=com.gneabit.CubeJump' className='ademo'>View Demo <FontAwesomeIcon icon={faAngleRight} /></a></p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

  const  CubeJumpStore= () => {
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
    export default CubeJumpStore;