import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import CRimg from '../Images/CR_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import './WordConnect.css';
import './Hajari.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import CR_img1 from '../Images/CR_IMG1.webp';
import CR_img2 from '../Images/CR_IMG2.webp';
import CR_img3 from '../Images/CR_IMG3.webp';
import CR_img4 from '../Images/CR_IMG4.webp';

function HeaderCR() {
    return (
      <div>
        <img src={CRimg} className='hjimg' alt=''/>
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
      <h1>COLOR RUN<br></br><span>_______________________</span></h1>
      <p>The aim of Color Run is to navigate a colorful ball through a series of obstacles by tapping to jump, challenging players’ reflexes<br></br> and timing. The game is designed to provide endless fun while improving hand-eye coordination.</p>
      </div>
       </div>
    )
  }

  function CRtable1(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF COLOR RUN<br></br>_____________________________</h1>
            <p>Color Run features an intuitive and straightforward gameplay mechanism:<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Players tap the screen to make the ball jump, avoiding obstacles and hazards along the path.
            <br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> The objective is to keep the ball moving forward while navigating through changing colors and patterns.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} />  The game includes various levels of difficulty, increasing speed, and complexity as players progress.
            <br></br>
            <FontAwesomeIcon icon={faArrowsToDot} />  With a one-screen design, players can enjoy quick gaming sessions anytime, anywhere.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> The game ends when the ball collides with an obstacle, motivating players to achieve higher scores and improve their skills.</p>
          </td>
          <td>
            <img src={CR_img1} alt='' className='WCimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> SIMPLE TAP CONTROLS:</h3>
            <p>Enjoy easy-to-learn tap controls that make it accessible for players of all ages. Jump into the action with just a single tap!</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> ENDLESS GAMEPLAY:</h3>
            <p>Experience endless fun with no predefined levels. The challenge continues as you aim for higher scores with each run.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> VIBRANT VISUALS:</h3>
            <p>Immerse yourself in a visually stunning world filled with colorful graphics. The lively colors keep the gameplay engaging and entertaining.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> PROGRESSIVE DIFFICULTY:</h3>
            <p>Test your skills with increasing speed and complexity as you advance. Each run offers new challenges that keep players on their toes.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> HIGH SCORE TRACKING:</h3>
            <p>Compete against yourself and friends by tracking your high scores. Set new personal bests and challenge others to beat your record.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> QUICK PLAY SESSIONS:</h3>
            <p>Ideal for short bursts of fun, Color Run allows you to jump in and out of the game anytime. Perfect for casual gamers looking for a quick challenge.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function CRWorkFlow1(){
    return(
      <>
      <table className='WCwork1'>
        <tr>
          <td>
            <img src={CR_img1} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>JUMP INTO THE ACTION:</h2>
              <p>Welcome to Color Run! Tap to start your colorful adventure and see how far you can go!</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>GET READY FOR MORE CHALLENGES:</h2>
              <p>Congratulations on progressing! Prepare for increased speed and new obstacles in the next level of Color Run.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={CR_img2} alt='' className='WC_image'/>
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
            <img src={CR_img3} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>LET THE FUN BEGIN:</h2>
              <p>Tap to jump and navigate through the colorful obstacles ahead. Keep your reflexes sharp and enjoy the endless excitement!</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>TRY AGAIN FOR A HIGHER SCORE:</h2>
              <p>Don’t be discouraged! Review your score and jump back into the game to beat your personal best.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={CR_img4} alt='' className='WC_image'/>
          </td>
        </tr>
        <tr></tr>
      </table>
      </>
    )
  }

  export default function ColorRun() {
        return (
          <div>
            <HeaderCR/>
            <CRtable1/>
            <Features/>
            <CRWorkFlow1/>
            <GameDiv/>
            <Footer/>
          </div>
        )
      }