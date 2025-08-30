import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import CallBreakimg from '../Images/CallBreak_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import './WordConnect.css';
import './Hajari.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import CB_img1 from '../Images/CALLBREAK_IMG1.webp';
import CB_img2 from '../Images/CALLBREAK_IMG2.webp';
import CB_img3 from '../Images/CALLBREAK_IMG3.webp';
import CB_img4 from '../Images/CALLBREAK_IMG4.webp';
import CB_img5 from '../Images/CALLBREAK_IMG5.webp';
import CB_img6 from '../Images/CALLBREAK_IMG6.webp';

function HeaderCB() {
    return (
      <div>
        <img src={CallBreakimg} className='hjimg' alt=''/>
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
      <h1>CALL BREAK<br></br><span>_______________________</span></h1>
      <p>Call Break challenges players to predict the number of tricks they will take in each round, testing their strategic skills and<br></br> precision. The aim is to outsmart your opponents by accurately calling and winning bids.</p>
      </div>
       </div>
    )
  }

  function CBtable1(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF CALL BREAK<br></br>_____________________________</h1>
            <p>Call Break is a 4-player card game where each player bids for a certain number of tricks they will win in a round. Players take turns playing their cards, and the highest card of the suit led wins the trick. The game continues for multiple rounds, and the player with the most accurate bids wins the match.</p>
          </td>
          <td>
            <img src={CB_img1} alt='' className='WCimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> FACE OF AGAINST THREE OPPONENTS:</h3>
            <p>Play against three other players and test your card skills in this engaging and competitive card game.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> STRATEGIC BIDDING:</h3>
            <p>Players must predict how many tricks they can win, which adds a layer of strategy to the game.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> MORE CHANCES TO WIN:</h3>
            <p>Call Break is played over multiple rounds, giving players plenty of opportunities to adjust their strategies and come back stronger.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> EASY NEVIGATION:</h3>
            <p>The game's clean interface allows players to navigate smoothly between bidding, gameplay, and results.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY ANYTIME,ANYWHERE:</h3>
            <p>Call Break also offers an offline mode, letting you enjoy the game even without an internet connection.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> TRACK YOUR PROJECT:</h3>
            <p>Compare your performance with other players on the leaderboard and view your game statistics to see how you're improving.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function CBWorkFlow1(){
    return(
      <>
      <table className='WCwork1'>
        <tr>
          <td>
            <img src={CB_img1} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>MAKE YOUR MOVE:</h2>
              <p>Join the game, select your cards, and outplay your opponents to win tricks and achieve your bid</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>CALL YOUR STRATEGY:</h2>
              <p>Choose your bid wisely based on the cards you have, and set your game plan in motion.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={CB_img2} alt='' className='WC_image'/>
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
            <img src={CB_img3} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>CHECK YOUR PERFORMANCE:</h2>
              <p>View the final results after each round and see how well your bid prediction matched your actual performance.</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>CELEBRATE VICTORY:</h2>
              <p>Relish the moment of triumph as you claim the most tricks and win the game with a perfect bid.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={CB_img4} alt='' className='WC_image'/>
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
            <img src={CB_img5} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>NEVIGATE WITH EASE:</h2>
              <p>Access all game modes, settings, and other options with a simple, user-friendly menu interface.</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>CONNECTION LOST-TRY AGAIN:</h2>
              <p>An alert appears when your internet connection is lost. Retry once you’re back online to continue playing uninterrupted.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={CB_img6} alt='' className='WC_image'/>
          </td>
        </tr>
      </table>
      </>
    )
  }

  export default function CallBreak() {
        return (
          <div>
            <HeaderCB/>
            <CBtable1/>
            <Features/>
            <CBWorkFlow1/>
            <GameDiv/>
            <Footer/>
          </div>
        )
      }