import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import atpimg from '../Images/A1P_Tenn_Patti_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import ATP_img1 from '../Images/ATP_IMG1.webp';
import ATP_img2 from '../Images/ATP_IMG2.webp';
import ATP_img3 from '../Images/ATP_IMG3.webp';


function HeaderATP() {
    return (
      <div>
        <img src={atpimg} className='hjimg' alt=''/>
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
      <h1>A1P TEEN PATTI<br></br><span>_______________________</span></h1>
      <p>The aim of A1P Teen Patti is to outwit opponents by forming the best possible hand or strategically bluffing in order to win the pot<br></br> in thrilling card rounds.</p>
      </div>
       </div>
    )
  }

  function ATPGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF A1P TEEN PATTI<br></br>_____________________________</h1>
            <p>In A1P Teen Patti, each player is dealt three cards. The goal is to have the highest-ranking hand. Players can place bets, raise, or fold based on their cards. The game blends luck and strategy, challenging players to read their opponents and make the best decisions for victory.</p>
          </td>
          <td>
            <img src={ATP_img2} alt='' className='hajariimg1'/>
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
        <p>At <b>GameStream</b>, we take your concepts and turn them into immersive, engaging experiences. Our expert team transforms visions into fully realized games that captivate and inspire.</p></center>
      </td>
    </tr>
    <tr>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EXPERIENCE THE TRADITIONAL GAME:</h3>
          <p>Play the beloved Teen Patti game, a cultural favorite, where skill and luck combine for an exciting gameplay experience.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY WITH FRIENDS:</h3>
          <p>Set up private tables to play with friends or family in a secure, intimate setting, ensuring memorable moments with loved ones.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMPETE GLOBALLY:</h3>
          <p>Join multiplayer tables and challenge players from around the world, testing your skills against diverse opponents.<br></br><br></br></p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EARN FREE CHIPS:</h3>
          <p>Log in daily to claim free chips and boost your bankroll, keeping you in the game even longer.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> RISE TO THE TOP:</h3>
          <p>Compete for the highest ranks on the leaderboard, earning rewards and recognition as a top Teen Patti player.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STAY SOCIAL AT THE TABLE:</h3>
          <p>Engage with other players through real-time chat, adding a social layer to the competitive nature of the game.<br></br><br></br></p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function ATPWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={ATP_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>WELCOME TO A1P TEEN PATTI:</h2>
              <p>Step into the world of high-stakes card play with vibrant visuals and a quick-loading screen that brings you into the game in seconds.</p>
            </div>
            </div>
          </td>
          </tr>
          <tr>
          <td>
            <br></br>
            <br></br>
          </td>
          </tr>
          <tr>
          <td>
            <div  className='HJDIV2'>
            <div>
              <h2>NAVIGATE WITH EASE:</h2>
              <p>Quickly access your favorite tables, tournaments, and private games with a user-friendly interface that brings you straight into the action.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={ATP_img2} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <br></br>
            <br></br>
          </td>
          </tr>
          <tr>
          <td>
            <div  className='HJDIV1'>
            <img src={ATP_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>PLACE BETS AND PLAY TO WIN:</h2>
              <p>Immerse yourself in the thrilling Teen Patti experience by placing bets, bluffing, and outplaying your opponents in real-time gameplay.</p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function A1PTeenPatti() {
    return (
      <div>
        <HeaderATP/>
        <ATPGP/>
        <Features/>
        <ATPWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }