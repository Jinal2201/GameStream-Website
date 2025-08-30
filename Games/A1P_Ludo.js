import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import a1pludoimg from '../Images/a1p_ludo_bg.jpeg';
import './WordConnect.css';
import a1pludo_img from '../Images/YONO_IMG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import a1pludo_img1 from '../Images/A1P_LUDO_IMG1.webp';
import a1pludo_img2 from '../Images/A1P_LUDO_IMG2.webp';
import a1pludo_img3 from '../Images/A1P_LUDO_IMG3.webp';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';

function HeaderA1Pludo() {
    return (
      <div>
        <img src={a1pludoimg} className='wcimg' alt=''/>
        <img src={Image} className='logo' alt='logo'/>
      <ul className='headerul'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about-us'}>About Us</Link></li>
        <li><Link to={'/services'} >Services</Link></li>
        <li><Link to={'/potfolio'}>Portfolio</Link></li>
        <li><Link to={'/contact-us'}>Contact Us</Link></li>
        <li><Link to={'/store'}>Store</Link></li>
      </ul>
      <div className='wcdiv'>
      <h1>A1P LUDO<br></br><span>_______________________</span></h1>
      <p>The aim of A1P Ludo is to strategically move all your tokens from the starting position to the home base before your opponents,<br></br> while blocking or eliminating their tokens along the way.</p>
      </div>
       </div>
    )
  }

function A1Pludotable1(){
  return(
    <>
    <table className='WCtable1'>
      <tr>
        <td>
          <h1>GAMEPLAY OF A1P LUDO<br></br>_____________________________</h1>
          <p>A1P Ludo offers a variety of ways to enjoy the game. Whether you're playing against the computer, inviting friends to a private table, or challenging global opponents in online matches, every game is filled with strategic twists. Use smart dice rolls and strategic planning to outwit your opponents and race to victory.</p>
        </td>
        <td>
          <img src={a1pludo_img} alt='' className='WCimg1'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function Features(){
  return(
    <>
    <table className='Featurestable'>
    <tr>
      <td colSpan={3}>
       <center><h1>FEATURES</h1>
        <p>At <b>GameStream</b>, we take your concepts and turn them into immersive, engaging experiences. Our expert team transforms visions into fully realized<br></br> games that captivate and inspire.</p></center> 
      </td>
    </tr>
    <tr>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CHALLENGE FRIENDS PRIVATELY:</h3>
          <p>Invite your friends to a private table where you can play Ludo together without distractions, making it a perfect way to enjoy personal or competitive rounds.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SOLO FUN WITH AI:</h3>
          <p>Don’t have anyone to play with? No worries! Play against a challenging AI opponent who is ready to keep you entertained.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMPETE GLOBALLY:</h3>
          <p>Test your skills by playing online against players from around the world in competitive matches, proving your Ludo mastery.</p>
        </div>
      </td>
    </tr>
    <tr>
      <td colSpan={3}>
        <br></br>
      </td>
    </tr>
    <tr>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> TAP TO ROLL AND MOVE:</h3>
          <p>Experience smooth gameplay with easy-to-use controls. Roll the dice, move your tokens, and make strategic decisions with just a tap.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> VIBRANT BOARD AND TOKENS:</h3>
          <p>The game features bright, colorful designs that make your Ludo experience visually engaging, ensuring hours of fun.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMMUNICATE DURING PLAY:</h3>
          <p>Enjoy real-time chat with your opponents during online matches, adding a social element to your competitive Ludo games.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function A1PludoWorkFlow1(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={a1pludo_img1} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>WELCOME TO A1P LUDO:</h2>
            <p>Experience a fast-loading, vibrant introduction to the classic Ludo board game, setting the tone for hours of strategic fun.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>QUICK MODE SELECTION</h2>
            <p>Navigate between private tables, playing with AI, or online matches easily from the streamlined dashboard for a quick and exciting start to your game.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={a1pludo_img2} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function A1PludoWorkFlow2(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={a1pludo_img3} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='a1pludoDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='left_caret' />
          <div>
            <h2>ENGAGE IN STRATEGIC LUDO PLAY:</h2>
            <p>Monitor your tokens, roll the dice, and plan your moves carefully on a visually striking Ludo board to outmaneuver your opponents.</p>
          </div>
          </div>
        </td>
      </tr>
    </table>
    </>
  )
}



export default function A1P_LUDO() {
  return (
    <div>
      <HeaderA1Pludo/>
      <A1Pludotable1/>
      <Features/>
      <A1PludoWorkFlow1/> 
      <A1PludoWorkFlow2/>
      <GameDiv/>
      <Footer/>
    </div>
  )
}
