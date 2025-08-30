import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import BPimg from '../Images/BlockPuzzle_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import './WordConnect.css';
import './Hajari.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import BP_img from '../Images/BP_img.webp'; 
import BP_img1 from '../Images/BP_IMG1.webp';
import BP_img2 from '../Images/BP_IMG2.webp';
import BP_img3 from '../Images/BP_IMG3.webp';
import BP_img4 from '../Images/BP_IMG4.webp';

function HeaderBP() {
    return (
      <div>
        <img src={BPimg} className='hjimg' alt=''/>
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
      <h1>BLOCK PUZZLE<br></br><span>_______________________</span></h1>
      <p>The aim of Block Puzzle is to challenge players’ problem-solving skills by strategically placing blocks on a grid to create complete<br></br> lines and clear them from the board. This engaging and addictive game promotes critical thinking while providing endless hours <br></br>of entertainment.</p>
      </div>
       </div>
    )
  }

  function BPtable1(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF BLOCK <br></br>PUZZLE<br></br>_____________________________</h1>
            <p>Block Puzzle features a simple yet captivating gameplay mechanic:<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> Players receive different shaped blocks that they can rotate and place on a 10x10 grid.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} /> The objective is to form complete horizontal or vertical lines to clear blocks and earn points.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} />  As players progress, they face increasing challenges with new block shapes and limited space.
            <br></br>
            <FontAwesomeIcon icon={faArrowsToDot} />  There are no time limits, allowing players to think strategically and make calculated moves.<br></br>
            <FontAwesomeIcon icon={faArrowsToDot} />  The game ends when there’s no more space to place blocks, encouraging players to beat their high scores and improve their strategies.</p>
          </td>
          <td>
            <img src={BP_img} alt='' className='WCimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> SIMPLE AND ADDICTIVE GAMEPLAY:</h3>
            <p>Enjoy a straightforward yet engaging puzzle experience. The easy-to-understand mechanics keep players coming back for more.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> ENDLESS LEVELS:</h3>
            <p>Challenge yourself with an infinite number of puzzles to solve. No two games are the same, ensuring continuous fun and engagement.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> RELAXING AND CASUAL PLAY:</h3>
            <p>Take your time to think through each move. Block Puzzle is designed for a stress-free experience, perfect for players of all ages.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY CHALLENGES:</h3>
            <p>Participate in daily challenges to earn rewards and bonuses. Complete unique puzzles each day for additional fun and prizes.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> LEADERBOARD AND ACHIEVEMENT:</h3>
            <p>Compete with friends and players worldwide. Track your scores and achievements to see how you rank against others.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> COLORFUL AND ENGAGING GRAPHICS:</h3>
            <p>Enjoy vibrant visuals and smooth animations that enhance the gameplay experience. The aesthetic appeal keeps players engaged.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function BPWorkFlow1(){
    return(
      <>
      <table className='WCwork1'>
        <tr>
          <td>
            <img src={BP_img1} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>YOUR PUZZLE PLAYGROUND:</h2>
              <p>Easily access different levels and challenges from the dashboard. Dive into Block Puzzle and start solving right away!</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>CUSTOMIZE YOUR GAME:</h2>
              <p>Adjust sound, notifications, and visual settings to fit your preferences. Create the perfect environment for your puzzle-solving experience.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={BP_img2} alt='' className='WC_image'/>
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
            <img src={BP_img3} alt='' className='WC_image'/>
          </td>
          <td>
            <div className='WCDIV1'>
            <FontAwesomeIcon icon={faCaretLeft} className='leftcaret' />
            <div>
              <h2>YOUR PUZZLE JOURNEY:</h2>
              <p>Track your progress, scores, and achievements. Monitor how you improve over time as you conquer new challenges in Block Puzzle.</p>
            </div>
            </div>
          </td>
          <td>
            <div  className='WCDIV2'>
            <div>
              <h2>CELEBRATE YOUR SUCCESS:</h2>
              <p>Revel in your victories with a celebratory screen showcasing your score and completed lines. Share your achievements and challenge yourself to beat your record!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='rightcaret'/> 
            </div>
          </td>
          <td>
            <img src={BP_img4} alt='' className='WC_image'/>
          </td>
        </tr>
        <tr></tr>
      </table>
      </>
    )
  }

  export default function BlockPuzzle() {
        return (
          <div>
            <HeaderBP/>
            <BPtable1/>
            <Features/>
            <BPWorkFlow1/>
            <GameDiv/>
            <Footer/>
          </div>
        )
      }