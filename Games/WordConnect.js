import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import wcimg from '../Images/WC_bg.jpeg';
import './WordConnect.css';
import WCimg1 from '../Images/WCimg1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import WC_img1 from '../Images/WC_IMG1.webp';
import WC_img2 from '../Images/WC_IMG2.webp';
import WC_img3 from '../Images/WC_IMG3.webp';
import WC_img4 from '../Images/WC_IMG4.webp';
import WC_img5 from '../Images/WC_IMG5.webp';
import WC_img6 from '../Images/WC_IMG6.webp';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';

function HeaderWC() {
    return (
      <div>
        <img src={wcimg} className='wcimg' alt=''/>
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
      <h1>WORD CONNECT<br></br><span>_______________________</span></h1>
      <p>The primary aim of Word Connect is to challenge players to find hidden words from a random set of letters. By connecting the letters in the correct sequence, players must uncover as many words as possible to progress through levels.</p>
      <p>The game tests vocabulary skills, enhances word recognition, and sharpens the mind through increasing difficulty and complexity. It’s designed for players of all ages, offering both fun and education in one engaging package.</p>
      </div>
       </div>
    )
  }

function WCtable1(){
  return(
    <>
    <table className='WCtable1'>
      <tr>
        <td>
          <h1>GAMEPLAY OF WORD <br></br>CONNECT<br></br>_____________________________</h1>
          <p>In <b>Word Connect</b>, players are presented with a grid of scrambled letters. Using simple swipe gestures, they connect these letters to form valid words. As words are discovered, they are displayed on the board, and points are accumulated.</p>
          <p>Each level comes with a specific set of words to find, ranging from easy to challenging, with difficulty increasing as you progress.</p>
        </td>
        <td>
          <img src={WCimg1} alt='' className='WCimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> HINTS AND POWER-UPS:</h3>
          <p>If you get stuck, you can use hints to uncover letters or whole words, helping you through the toughest puzzles.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY CHALLENGES:</h3>
          <p>Complete daily puzzles to earn bonuses and in-game currency, keeping the gameplay fresh and rewarding.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EXPANDING VOCABULARY:</h3>
          <p>Discover new words as you play, helping you improve your vocabulary and language skills over time.</p>
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
          <p>Start with easy puzzles and work your way up to more challenging levels as you continue progressing.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> RELAXING YET ADDICTIVE GAMEPLAY:</h3>
          <p>The interface is calm, offering a relaxing experience while keeping players hooked with challenges.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> OFFLINE MODE:</h3>
          <p>Play anytime and anywhere, even without an internet connection, ensuring continuous fun without interruptions.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function WCWorkFlow1(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={WC_img1} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>EXPLORE THE DICTIONARY:</h2>
            <p>Access the built-in dictionary to discover meanings and definitions for every word you connect during gameplay.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>CUSTOMIZE YOUR EXPERIENCE:</h2>
            <p>Adjust game settings such as sound, notifications, and themes to create a personalized gameplay environment.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={WC_img2} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function WCWorkFlow2(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={WC_img3} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>EXCLUSIVE DEALS AWAIT:</h2>
            <p>Discover special offers and bundles to upgrade your word-solving skills and enjoy more fun features.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>PROGRESS THROUGH CHALLANGING LEVELS:</h2>
            <p>Track your journey as you unlock and conquer each new level, with increasing difficulty to test your word skills.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={WC_img4} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function WCWorkFlow3(){
  return(
    <>
    <table className='WCwork1'>
      <tr>
        <td>
          <img src={WC_img5} alt='' className='WC_image'/>
        </td>
        <td>
          <div className='WCDIV1'>
          <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
          <div>
            <h2>FIND HIDDEN WORDS:</h2>
            <p>Swipe to connect letters and uncover hidden words in an intuitive and engaging puzzle challenge.</p>
          </div>
          </div>
        </td>
        <td>
          <div  className='WCDIV2'>
          <div>
            <h2>BOOST YOUR BRAIN:</h2>
            <p>Sharpen your mind with progressively tougher word puzzles while enjoying smooth, seamless gameplay.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
          </div>
        </td>
        <td>
          <img src={WC_img6} alt='' className='WC_image'/>
        </td>
      </tr>
    </table>
    </>
  )
}

export default function WordConnect() {
  return (
    <div>
      <HeaderWC/>
      <WCtable1/>
      <Features/>
      <WCWorkFlow1/> 
      <WCWorkFlow2/> 
      <WCWorkFlow3/> 
      <GameDiv/>
      <Footer/>
    </div>
  )
}
