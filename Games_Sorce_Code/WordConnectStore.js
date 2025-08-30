import React from 'react'
import Image from '../Images/App_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './WordConnectStore.css';
import WordConnectStore1 from '../Images/Word-Connect-Store.webp';
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
            <center><h1>WORD CONNECT</h1></center>
          </td>
        </tr>
        <tr>
          <td>
          <img src={WordConnectStore1} alt='' className='StoreImg1'/>
          </td>
          <td>
            <div className='WCDiv'>
            <h1>Word Connect</h1>
            <h2 className='priceh1'>₹79,999.99</h2>
            <p><FontAwesomeIcon icon={faArrowsToDot} /> Shows current coins as well if user want to add more coins user can watch the adds or user can buy.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on setting button user can turn off music and sound, Also by clicking data privacy user can ready privacy<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on all levels you can find all levels by chapter.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> In the middle of the screen user can find your total score.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Connect letters to get the right word.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> If user is not able to connect the right letter can take help of hints.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on this user can get hint of any letter.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on this user can get more coins in free.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on this user can open dictionary where user can find the meaning of the correct word<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking on this user can get some random letters filled auto.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Here you can find extra words which you created during the level.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> By clicking this user can select any box to get box filled with correct letter.
            </p>
            <div className='ContainorBtn'>
            <p onClick={() => addToCart(1, 79999.99)}> Add to Cart <FontAwesomeIcon icon={faCartShopping} /></p>
            <p><a href='http://localhost:5000/cart.html' className='ademo'>View Cart</a></p>
            <p><a href='https://play.google.com/store/apps/details?id=com.Gneabit.WordConnect' className='ademo'>View Demo <FontAwesomeIcon icon={faAngleRight} /></a></p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }


  
  const  WordConnectStore= () => {
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
  export default WordConnectStore;

  