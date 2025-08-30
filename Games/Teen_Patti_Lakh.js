import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import tplimg from '../Images/TPL_bg.jpeg';
import TPLimg from '../Images/TPL_img.webp';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import TPL_img1 from '../Images/TPL_IMG1.webp';
import TPL_img2 from '../Images/TPL_IMG2.webp';
import TPL_img3 from '../Images/TPL_IMG3.webp';
import TPL_img4 from '../Images/TPL_IMG4.webp';

function HeaderTPL() {
    return (
      <div>
        <img src={tplimg} className='hjimg' alt=''/>
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
      <h1>TEEN PATTI LAKH<br></br><span>_______________________</span></h1>
      <p>The aim of Teen Patti Lakh is to outplay your opponents with the best card combinations and strategic betting. The goal is to have the strongest hand or bluff your way to victory in this exciting game of chance and skill.</p>
      </div>
       </div>
    )
  }

  function TPLtable1(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF TEEN<br></br>LAKH<br></br>_____________________________</h1>
            <p>Teen Patti Lakh is a traditional Indian card game played with a standard deck of 52 cards. Players are dealt three cards each, and the goal is to have the best hand, similar to poker. The game progresses with rounds of betting, and players can fold, raise, or call based on their confidence in their hand. Bluffing is a key element, making it as much about reading your opponents as it is about the cards.</p>
          </td>
          <td>
            <img src={TPLimg} alt='' className='WCimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTIPLE GAME MODES:</h3>
            <p>Enjoy various game modes, including Classic, Joker, and AK47. Each mode offers a unique twist on the traditional Teen Patti experience.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> PRIVATE TABLES:</h3>
            <p>Create a private table and invite friends or family to enjoy a personalized game session. Play with your own rules and preferences.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> LIVE MULTIPLAYER:</h3>
            <p>Compete against real players in live online matches. Engage in intense gameplay and rise through the ranks in real-time.<br></br><br></br></p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY BONUSES:</h3>
            <p>Log in daily to claim exciting rewards. Boost your in-game currency with daily bonuses and free chips.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> INTERACTIVE EMOJIS AND CHAT:</h3>
            <p>Make gameplay more engaging with a variety of emojis and real-time chat features. Communicate and have fun with your opponents.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> TOURNAMENTS:</h3>
            <p>Participate in high-stakes tournaments to win big rewards. Test your skills against the best players in large, competitive formats.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function TPLWorkFlow1(){
    return(
      <>
      <table className='WCwork1'>
        <tr>
          <td>
            <img src={TPL_img1} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>YOUR GAME HUB:</h2>
              <p>Access all the game modes, events, and statistics from the main dashboard. Easily navigate to your favorite game features with just one tap.</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>TAILOR YOUR EXPERIENCE:</h2>
              <p>Modify game rules, control sounds, and personalize your gameplay preferences. Adjust settings to create the perfect gaming environment.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={TPL_img2} alt='' className='WC_image'/>
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
          <img src={TPL_img3} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>TAKE YOUR SUCCESS:</h2>
            <p>View your game stats, achievements, and history. Stay on top of your progress as you climb the leaderboard and become a Teen Patti master.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>VICTORY IS YOURS!</h2>
            <p>Celebrate your wins with a grand animation, displaying your winning amount and game stats. Enjoy the thrill of your triumph before moving on to the next challenge.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={TPL_img4} alt='' className='WC_image'/>
        </td>
      </tr>
      </table>
      </>
    )
  }

  export default function TeenPattiLakh() {
    return (
      <div>
        <HeaderTPL/>
        <TPLtable1/>
        <Features/>
        <TPLWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }