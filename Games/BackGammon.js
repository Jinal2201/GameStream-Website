import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import hjimg from '../Images/BackGammon_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import BackGammonimg1 from '../Images/BackGammon_img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import BG_img1 from '../Images/BackGammon_img1.webp';
import BG_img2 from '../Images/BackGammon_img2.webp';
import BG_img3 from '../Images/BackGammon_img3.webp';
import BG_img4 from '../Images/BackGammon_img4.webp';

function HeaderGM() {
  return (
    <div>
      <img src={hjimg} className='hjimg' alt=''/>
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
    <h1>BACKGAMMON<br></br><span>_______________________</span></h1>
    <p>The aim of Backgammon is to move all your checkers around the board and bear them off before your opponent does. Using strategy, dice rolls, and smart moves, players race to remove their pieces from the board first.</p>
    </div>
     </div>
  )
}

function BackGammonGP(){
  return(
    <>
    <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF BACKGAMMON<br></br>_____________________________</h1>
            <p>Backgammon is a strategic two-player game where each player moves their checkers according to the roll of two dice. The objective is to move all checkers into the home board and bear them off. The first player to bear off all their checkers wins the game. Each player must also consider defensive tactics, like blocking the opponent’s pieces and hitting them back to delay their progress.</p>
          </td>
          <td>
            <img src={BackGammonimg1} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CLASSIC TWO-PLAYER MODE:</h3>
          <p>Play against another opponent in the timeless classic format of Backgammon. Test your skills in this traditional board game</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} />ONLINE MULTIPLAYER:</h3>
          <p>Challenge players from around the world in real-time matches. Climb up the global leaderboards and prove you're the best.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> AI OPPONENT:</h3>
          <p>Hone your skills by playing against an advanced AI. Choose from different difficulty levels to improve your gameplay.</p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CUSTOMIZABLE BOARDS:</h3>
          <p>Personalize your experience with a variety of board themes and designs. Make every game visually appealing to your taste.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY CHALLENGES:</h3>
          <p>Complete daily tasks and challenges to earn in-game rewards. Keep your gameplay fresh and exciting with new objectives each day.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STATISTICS TRACKER:</h3>
          <p>Monitor your game history and performance with detailed stats. Track wins, losses, and other game metrics to improve your strategy.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function BGWorkFlow1(){
  return(
    <>
    <table className='HJwork1'>
      <tr>
        <td>
        <div className='HJDIV1'>
          <img src={BG_img1} alt='' className='HJ_image'/>
          <FontAwesomeIcon icon={faCaretLeft} className='cl' />
          <div>
            <h2>YOUR GAME HUB:</h2>
            <p>Easily access different game modes, review your match stats, and start new games from the dashboard. Everything you need to jump into action!</p>
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
            <h2>CELEBRATE YOUR VICTORY!:</h2>
            <p>Enjoy a visual celebration as you win the game, with your stats displayed. Relish in the moment and gear up for the next match.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
          <img src={BG_img2} alt='' className='HJ_image'/>
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
          <img src={BG_img3} alt='' className='HJ_image'/>
          <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
          <div>
            <h2>PERSONALIZE YOUR GAME:</h2>
            <p>Customize your game experience with various options, from sound settings to game rules. Make the game truly your own.</p>
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
            <h2>TRACK YOUR JOURNEY:</h2>
            <p>View your gaming history, achievements, and overall stats. Keep an eye on your progress as you become a Backgammon master.</p>
          </div>
          <FontAwesomeIcon icon={faCaretRight} className='cr'/>
          <img src={BG_img4} alt='' className='HJ_image'/>
          </div>
        </td>
      </tr>
    </table>
    </>
  )
}

export default function BackGammon() {
    return (
      <div>
        <HeaderGM/>
        <BackGammonGP/>
        <Features/>
        <BGWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }
