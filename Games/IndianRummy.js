import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import irimg from '../Images/IndianRummy_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import IR_img1 from '../Images/IR_IMG1.webp';
import IR_img2 from '../Images/IR_IMG2.webp';
import IR_img3 from '../Images/IR_IMG3.webp';
import IR_img4 from '../Images/IR_IMG4.webp';


function HeaderIR() {
    return (
      <div>
        <img src={irimg} className='hjimg' alt=''/>
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
      <h1>INDIAN RUMMY<br></br><span>_______________________</span></h1>
      <p>Indian Rummy is a multi-feature game combining the excitement of Safari Spin Wheel, Slots, and Mines. The aim is to challenge your luck while strategically maximizing your rewards in different game modes.</p>
      </div>
       </div>
    )
  }

  function IRGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF INDIAN RUMMY<br></br>_____________________________</h1>
            <p>In Indian Rummy, players are dealt 13 cards each. The goal is to form valid sets and sequences from these cards, ensuring at least one pure sequence, to declare victory. Players can draw and discard cards, strategizing to complete their sets while blocking opponents from completing theirs.</p>
          </td>
          <td>
            <img src={IR_img1} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> TRADITIONAL INDIAN RUMMY RULES:</h3>
          <p>Play the authentic 13-card version of Rummy, where you can win by forming sets and sequences.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CHOOSE YOUR CHALLENGE:</h3>
          <p>Compete head-to-head in 2-player matches or face more opponents in 6-player games for higher stakes.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY WITH FRIENDS:</h3>
          <p>Create private tables to play exclusively with your friends and family, offering a more personal and fun experience.</p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> JOIN EXCITING COMPETITIONS:</h3>
          <p>Compete in tournaments where you face off against skilled players from around the world and aim for top positions.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> INTERACT DURING GAMES:</h3>
          <p>Use the live chat feature to communicate with other players, making the game more social and enjoyable.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CLAIM REWARDS DAILY:</h3>
          <p>Get daily rewards just by logging in. Use these bonuses to improve your chances in the game.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function IRWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={IR_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>STRATEGIZE EVERY MOVE:</h2>
              <p>Draw, discard, and arrange your cards to form valid sets and sequences. Keep an eye on your opponents’ moves.</p>
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
              <h2>ACCESS ALL GAME MODES:</h2>
              <p>The Dashboard lets you join tables, tournaments, or set up private games in Indian Rummy. Get ready to test your skills.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={IR_img2} alt='' className='HJ_image'/>
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
            <img src={IR_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>TRACK YOUR PROGRESS:</h2>
              <p>View your scores after each round to see how well you’re performing. Stay ahead by making smart decisions.</p>
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
              <h2>SHOWCASE YOUR SKILLS:</h2>
              <p>Customize your profile and check your game stats, win rates, and achievements. Display your Rummy expertise!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={IR_img4} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <br></br>
            <br></br>
          </td>
          </tr>
      </table>
      </>
    )
  }
  

export default function IndianRummy() {
    return (
      <div>
        <HeaderIR/>
        <IRGP/>
        <Features/>
        <IRWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }