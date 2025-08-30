import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import teenpattidiamondimg from '../Images/teen_patti_diamond_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import teenpattidiamond_img1 from '../Images/teenpattidiamond_img1.webp';
import teenpattidiamond_img2 from '../Images/teenpattidiamond_img2.webp';
import teenpattidiamond_img3 from '../Images/teenpattidiamond_img3.webp';

function HeaderTeenPattiDiamond() {
    return (
      <div>
        <img src={teenpattidiamondimg} className='hjimg' alt=''/>
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
      <h1>TEEN PATTI DIAMOND<br></br><span>_______________________</span></h1>
      <p>The aim of Teen Patti Diamond is to offer a premium card gaming experience where players can join tables, create private games,<br></br> or enjoy different variations, all while aiming to build their pot and outsmart opponents.</p>
      </div>
       </div>
    )
  }

  function TeenPattiDiamondGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF TEEN PATTI<br></br>DIAMOND<br></br>_____________________________</h1>
            <p>In Teen Patti Diamond, you can join a table with friends or other players, create private rooms, or try different game variations like Joker, Muflis, and AK47. With the option to play on premium tables, the stakes are higher, and the rewards are even sweeter. Bluff, bet, and build your strategy to win big!</p>
          </td>
          <td>
            <img src={teenpattidiamond_img3} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> INSTANT MATCHMAKING:</h3>
          <p>Hop into any table quickly and start playing with random opponents for fast and competitive gameplay.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY WITH FRIENDS:</h3>
          <p>Create your own private game and invite friends for an exclusive Teen Patti session, ensuring a personal and fun-filled experience.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTIPLE WAYS TO PLAY:</h3>
          <p>Enjoy different styles of Teen Patti, such as Joker, Muflis, and AK47, each offering its own set of strategies and fun.<br></br><br></br></p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> HIGH STAKES,HIGH REWARDS:</h3>
          <p>Take your game to the next level by joining premium tables, where bigger bets lead to larger wins and more thrilling gameplay.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SEAMLESS USER EXPERIENCE:</h3>
          <p>Switch between tables, variations, and private games effortlessly with an intuitive and smooth interface that enhances your gaming experience.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STAY SOCIAL DURING PLAY:</h3>
          <p>Interact with friends and opponents through the in-game chat feature, adding a social aspect to every hand you play.<br></br><br></br></p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function TeenPattiDiamondWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={teenpattidiamond_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>ACCESS YOUR FAVORITE GAMES:</h2>
              <p>Quickly navigate through tables, variations, and private game options with a streamlined dashboard that keeps all your choices at your fingertips.</p>
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
              <h2>EXCLUSIVE GAME WITH FRIENDS:</h2>
              <p>Create a private table and invite your friends for a one-on-one match or group play in a secure, personalized setting.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={teenpattidiamond_img2} alt='' className='HJ_image'/>
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
            <img src={teenpattidiamond_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>WHERE THE GAME BEGINS:</h2>
              <p>Join open tables, place your bets, and start the game. Bluff, strategize, and win against opponents in real-time Teen Patti action.</p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function TeenPattidiamond() {
    return (
      <div>
        <HeaderTeenPattiDiamond/>
        <TeenPattiDiamondGP/>
        <Features/>
        <TeenPattiDiamondWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }