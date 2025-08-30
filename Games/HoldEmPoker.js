import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import hepimg from '../Images/Hold_Em_Poker_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import HEP_img1 from '../Images/HEP_IMG1.webp';
import HEP_img2 from '../Images/HEP_IMG2.webp';
import HEP_img3 from '../Images/HEP_IMG3.webp';
import HEP_img4 from '../Images/HEP_IMG4.webp';


function HeaderHEP() {
    return (
      <div>
        <img src={hepimg} className='hjimg' alt=''/>
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
      <h1>HOLD`EM POKER<br></br><span>_______________________</span></h1>
      <p>The aim of Hold'em Poker is to challenge players to use skill, strategy, and patience to build the best hand or bluff opponents in<br></br> exciting poker matches.</p>
      </div>
       </div>
    )
  }

  function HEPGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF HOLD`EM POKER<br></br>_____________________________</h1>
            <p>In Hold'em Poker, players are dealt two private cards and must use five community cards to form the best five-card hand. Players can bet, check, raise, or fold as they compete to win the pot in each round. It’s a game of both strategy and reading your opponents.</p>
          </td>
          <td>
            <img src={HEP_img1} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> AUTHENTIC HOLD`EM POKER EXPERIENCE:</h3>
          <p>Play the classic version of Texas Hold'em, where strategy and timing are key to winning big.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> JOIN AND CREATE TABLES:</h3>
          <p>Choose from open tables or create private ones to play with friends and family, making the experience more personal and exciting.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMPETE FOR BIG REWARDS:</h3>
          <p>Participate in exciting tournaments and face off against skilled players for the chance to win huge prizes.<br></br><br></br></p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STAY SOCIAL AT THE TABLE:</h3>
          <p>Engage in live chats with other players at the table, share strategies, or just keep it fun and light.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EARN EXTRA CHIPS:</h3>
          <p>Log in daily or complete challenges to earn chips and bonuses, keeping you in the game and boosting your bankroll.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PERSONALIZE YOUR LOOK:</h3>
          <p>Stand out at the table by customizing your avatar to reflect your style or personality, adding a personal touch to your gameplay.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function HEPWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={HEP_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>QUICK ACCESS TO TABLE:</h2>
              <p>The Dashboard offers seamless access to your favorite poker tables, tournaments, and private games. Dive into the action instantly.</p>
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
              <h2>BET,BLUFF AND WIN:</h2>
              <p>Make strategic decisions with each hand. Bet, raise, or fold while reading your opponents to build the best hand or force them out.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={HEP_img2} alt='' className='HJ_image'/>
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
            <img src={HEP_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>RETURN TO EXPLORE MORE GAMES:</h2>
              <p>Easily return to the lobby after a match to join another table or check out ongoing tournaments and events.</p>
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
              <h2>PERSONALIZE YOUR EXPERIENCE:</h2>
              <p>Adjust game settings to fit your preferences, from sound controls to gameplay speeds, making each poker round smoother and more enjoyable.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={HEP_img4} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function HoldEmPoker() {
    return (
      <div>
        <HeaderHEP/>
        <HEPGP/>
        <Features/>
        <HEPWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }