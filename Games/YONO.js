import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import yonoimg from '../Images/yono_bg.jpeg';
import './WordConnect.css';
import yono_img from '../Images/YONO_IMG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import yono_img1 from '../Images/YONO_IMG1.webp';
import yono_img2 from '../Images/YONO_IMG2.webp';
import yono_img3 from '../Images/YONO_IMG3.webp';
import yono_img4 from '../Images/YONO_IMG4.webp';
import yono_img5 from '../Images/YONO_IMG5.webp';
import yono_img6 from '../Images/YONO_IMG6.webp';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';

function HeaderYONO() {
    return (
      <div>
        <img src={yonoimg} className='wcimg' alt=''/>
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
      <h1>YONO<br></br><span>_______________________</span></h1>
      <p>Yono is a multi-feature game combining the excitement of Safari Spin Wheel, Slots, and Mines. The aim is to challenge your luck<br></br> while strategically maximizing your rewards in different game modes.</p>
      </div>
       </div>
    )
  }

function YONOtable1(){
  return(
    <>
    <table className='WCtable1'>
      <tr>
        <td>
          <h1>GAMEPLAY OF YONO<br></br>_____________________________</h1>
          <p>In Yono, players can experience three exciting game modes. Spin the wheel in Safari Spin Wheel to win rewards, try your luck in Slots to match symbols and earn coins, or strategically uncover safe tiles in Mines to increase your score. Each mode provides unique gameplay while offering the chance to win big.</p>
        </td>
        <td>
          <img src={yono_img} alt='' className='WCimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SPIN AND LUCK:</h3>
          <p>Test your luck by spinning the Safari-themed wheel. Win exciting rewards with each spin and aim for the jackpot.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> MATCH AND WIN:</h3>
          <p>Play the slot machine, match symbols, and win rewards. This classic casino experience brings non-stop fun to your fingertips.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STRATEGIC EXPLORATION:</h3>
          <p>Carefully choose tiles to uncover rewards while avoiding the mines. It’s a game of strategy and intuition.<br></br><br></br></p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMPLETE CHALLENGES FOR REWARDS:</h3>
          <p>Earn extra coins by completing daily tasks that keep you engaged with the game and help you improve your total score.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> FREQUANT BONUSES:</h3>
          <p>Collect bonuses from various in-game events, spins, and daily rewards to boost your total balance and enhance your gameplay experience.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> BOOST YOUR BALANCE:</h3>
          <p>Unlock the Fortune Spin Wheel for even greater rewards. Spin and win exclusive bonuses that can give you an edge in the game.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function YONOWorkFlow1(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={yono_img1} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>NAVIGATE ALL GAME MODES:</h2>
            <p>Easily access Safari Spin, Slots, Mines, and more from the Dashboard for a seamless gaming experience.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>COMPETE WITH FRIENDS:</h2>
            <p>See where you stand against other players on the ranking board. Climb higher with each win and show off your skills.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={yono_img2} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function YONOWorkFlow2(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={yono_img3} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>CLAIM YOUR FREE REWARDS:</h2>
            <p>Visit the bonus page daily to claim your free coins and boost your total balance.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>COMPLETE TASKS,WIN REWARDS:</h2>
            <p>Check the daily tasks, complete challenges, and earn additional rewards that help you progress in the game.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={yono_img4} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function YONOWorkFlow3(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={yono_img5} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>TAKE A CHANCE,WIN BIG:</h2>
            <p>Spin the Fortune Wheel to win exclusive rewards and bonuses that can make a difference in your gameplay.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>TRACK YOUR EARNINGS:</h2>
            <p>Keep an eye on your total balance as you play, win, and collect rewards from all game modes.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={yono_img6} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

export default function YONO() {
  return (
    <div>
      <HeaderYONO/>
      <YONOtable1/>
      <Features/>
      <YONOWorkFlow1/> 
      <YONOWorkFlow2/> 
      <YONOWorkFlow3/> 
      <GameDiv/>
      <Footer/>
    </div>
  )
}
