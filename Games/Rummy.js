import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import rummyimg from '../Images/Rummy_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import Rummyimg1 from '../Images/Rummy_img.webp';
import Rummyimg2 from '../Images/Rummy_img1.webp';
import Rummyimg3 from '../Images/Rummy_img2.webp';
import Rummyimg4 from '../Images/Rummy_img3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

function HeaderRummy() {
    return (
      <div>
        <img src={rummyimg} className='hjimg' alt=''/>
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
      <h1>RUMMY<br></br><span>_______________________</span></h1>
      <p>The aim of Rummy is to create valid sets and sequences from the cards dealt, utilizing strategy and careful calculation. Players must arrange their cards into proper combinations before their opponents, striving to declare the game and win.</p>
      </div>
       </div>
    )
  }


  function RummyGP(){
    return(
      <>
      <table className='WCtable1'>
          <tr>
            <td>
              <h1>GAMEPLAY OF RUMMY<br></br>_____________________________</h1>
              <p>In Rummy, players draw and discard cards to form sets (three or more cards of the same rank) or sequences (three or more consecutive cards of the same suit). The game offers both casual and competitive modes, with 2-player, 6-player, and private table options. Participants take turns drawing from a deck and discarding unwanted cards into a pile. The first player to create valid combinations and declare wins the round.</p>
            </td>
            <td>
              <img src={Rummyimg1} alt='' className='hajariimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> 2-PLAYER MODE:</h3>
            <p>Engage in quick, head-to-head games where you can challenge a single opponent for fast-paced excitement.<br></br><br></br></p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> 6-PLAYER MODE:</h3>
            <p>Play with up to 5 other players in a more dynamic and strategic version of Rummy. Compete to see who can be the first to form valid sets and sequences.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> PRIVATE TABLE:</h3>
            <p>Create your own table and invite friends for a private game of Rummy. Enjoy a personalized experience with close friends or family.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> LEADERBOARD COMPETITION:</h3>
            <p>rack your progress and compete with others on the leaderboard. Prove your skills and rise through the ranks to become a top player.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTIPLE GAME VARIATIONS:</h3>
            <p>Choose between different Rummy variations (like points, pool, or deals), giving you diverse options and keeping gameplay fresh and exciting.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY REWARDS:</h3>
            <p>Earn exciting bonuses and rewards for logging in and playing daily. Build your in-game currency to keep your games going strong.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function RummyWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={Rummyimg1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>HOST YOUR OWN GAME:</h2>
              <p>Invite friends and create your private table for an exclusive Rummy session. Set the stakes and enjoy a tailored gaming experience.</p>
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
              <h2>YOUR RUMMY HUB:</h2>
              <p>Access all game modes, view stats, and dive straight into your favorite Rummy variation from the dashboard. Everything you need in one place.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={Rummyimg2} alt='' className='HJ_image'/>
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
            <img src={Rummyimg3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>STRATEGIZE AND WIN:</h2>
              <p>Arrange your cards into valid sets and sequences as you play. Use your skills to outwit your opponents and be the first to declare.</p>
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
              <h2>TAKE YOUR PROGRESS:</h2>
              <p>Monitor your points and rank after each round. Stay updated on how you’re performing in real-time, and aim to stay on top!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={Rummyimg4} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

    export default function Rummy() {
        return (
          <div>
            <HeaderRummy/>
            <RummyGP/>
            <Features/>
            <RummyWorkFlow1/>
            <GameDiv/>
            <Footer/>
          </div>
        )
      }