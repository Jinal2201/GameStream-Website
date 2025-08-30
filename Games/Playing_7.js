import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import p7img from '../Images/p7_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import Playing7img1 from '../Images/Playing7_img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import P7_img1 from '../Images/Playing7_img1.webp';
import P7_img2 from '../Images/Playing7_img2.webp';
import P7_img3 from '../Images/Playing7_img3.webp';
import P7_img4 from '../Images/Playing7_img4.webp';

function HeaderGM() {
    return (
      <div>
        <img src={p7img} className='hjimg' alt=''/>
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
      <h1>PLAYING7<br></br><span>_______________________</span></h1>
      <p>The aim of Playing 7 is to offer a collection of exciting betting and lottery games like 7 Up Down, Dragon Tiger, Playing 7, and Wingo Lottery. Players can test their luck, strategy, and intuition to win big rewards across different game modes.</p>
      </div>
       </div>
    )
  }

  
function P7GP(){
    return(
      <>
      <table className='WCtable1'>
          <tr>
            <td>
              <h1>GAMEPLAY OF PLAYING7<br></br>_____________________________</h1>
              <p>Playing 7 offers a variety of betting and lottery-style games, each with  its own set of rules:<br></br>
              <FontAwesomeIcon icon={faArrowsToDot} /> <b>7 Up Down:</b> Guess if the total number on two dice will be above 7, below 7, or exactly 7.<br></br>
              <FontAwesomeIcon icon={faArrowsToDot} /> <b>Dragon Tiger:</b> A simple card comparison game where you bet on whether the Dragon or Tiger will draw the higher card.<br></br>
              <FontAwesomeIcon icon={faArrowsToDot} />  <b>Playing 7:</b> A fast-paced number game where players predict the outcome based on a spinning wheel of numbers.<br></br>
              <FontAwesomeIcon icon={faArrowsToDot} />  <b>Wingo Lottery:</b> A lottery-style game where players pick numbers, and if they match the winning draw, they claim the jackpot.</p>
            </td>
            <td>
              <img src={Playing7img1} alt='' className='hajariimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> VARIETY OF GAMES:</h3>
            <p>Play different games like 7 Up Down, Dragon Tiger, and Wingo Lottery. Switch between modes and explore new ways to win with ease.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> QUICK GAMEPLAY:</h3>
            <p>Each game is fast-paced, allowing players to complete rounds in just a few minutes. Ideal for quick, exciting sessions on the go.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> REAL-TIME BETTING:</h3>
            <p>Enjoy real-time betting action with live odds and dynamic gameplay. Make decisions quickly as you monitor game results in real-time.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> EASY TO LEARN:</h3>
            <p>Simple and straightforward rules for each game make Playing 7 accessible to players of all skill levels. Jump in and start playing right away!</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY REWARDS AND BONUSES:</h3>
            <p>Earn daily rewards by simply logging in or completing challenges. Boost your in-game currency with free bonuses and special offers.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTIPLAYER AND COMPETITIVE MODES:</h3>
            <p>Compete with other players in live games, showcasing your strategy and luck to climb leaderboards and win huge prizes.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }
  

  function P7WorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={P7_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>YOUR GAME COLLECTION:</h2>
              <p>Access all four games—7 Up Down, Dragon Tiger, Playing 7, and Wingo Lottery—directly from the dashboard. Choose your preferred mode and start playing instantly.</p>
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
              <h2>PERSONALIZE YOUR PLAN:</h2>
              <p>Adjust sound, game speed, and notifications to match your gaming preferences. Customize your experience for maximum enjoyment.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={P7_img2} alt='' className='HJ_image'/>
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
            <img src={P7_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>YOUR STATS AND ACHIEVEMENT:</h2>
              <p>Track your game history, win percentage, and achievements. Watch as you level up and improve your status as a Playing 7 champion.</p>
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
              <h2>CELEBRATE YOUR VICTORY:</h2>
              <p>Relish in your winnings with a vibrant celebration screen, showing off your game results, total earnings, and next challenge. Enjoy the glory of each win!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={P7_img4} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

  export default function Playing7() {
      return (
        <div>
          <HeaderGM/>
          <P7GP/>
          <Features/>
          <P7WorkFlow1/>
          <GameDiv/>
          <Footer/>
        </div>
      )
    }