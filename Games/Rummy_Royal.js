import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import rummyroyalimg from '../Images/rummy_royal_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import rummyroyal_img1 from '../Images/Rummy_royal_img1.webp';
import rummyroyal_img2 from '../Images/Rummy_royal_img2.webp';
import rummyroyal_img3 from '../Images/Rummy_royal_img3.webp';
import rummyroyal_img4 from '../Images/Rummy_royal_img4.webp';

function HeaderRummyroyal() {
    return (
      <div>
        <img src={rummyroyalimg} className='hjimg' alt=''/>
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
      <h1>RUMMY ROYAL<br></br><span>_______________________</span></h1>
      <p>The aim of Rummy Royal is to offer a rich variety of popular games like Rummy, Teen Patti, Ludo, Roulette, and Andar Bahar, all in<br></br> one app, allowing players to compete, strategize, and win in multiple styles of gameplay.</p>
      </div>
       </div>
    )
  }

  function RummyroyalGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF RUMMY ROYAL<br></br>_____________________________</h1>
            <p>Rummy Royal brings together classic card games, board games, and casino games in a unified platform. Whether it’s skill-based games like Rummy and Teen Patti or luck-based games like Roulette and Andar Bahar, each mode delivers an engaging experience. Players can switch seamlessly between games, compete in private or online matches, and aim for the top.</p>
          </td>
          <td>
            <img src={rummyroyal_img1} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> ALL POPULAR GAMES IN ONE PLACE:</h3>
          <p>Enjoy a mix of games like Rummy, Teen Patti, Ludo, Roulette, Andar Bahar, and more, each offering its own set of thrills and strategies.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CHOOSE YOUR OPPONENTS:</h3>
          <p>Invite friends to private games or challenge online opponents from around the world, creating endless opportunities for competitive play.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SIMPLE,INTUITIVE CONTROLS:</h3>
          <p>Switch between games with ease using a user-friendly interface designed for quick access and smooth transitions between matches.</p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EARN BONUSES AND PRIZES:</h3>
          <p>Play games and spin the wheel to win exciting rewards, bonuses, and in-game prizes to enhance your gaming experience.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> COMMUNICATE WITH OPPONENTS:</h3>
          <p>Enjoy real-time chat with other players during matches, adding a fun social dimension to your competitive experience.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> ENGAGING DESIGN ACROSS GAMES:</h3>
          <p>Each game is designed with colorful, visually engaging graphics that make every play session a treat for the eyes.<br></br><br></br></p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function RummyroyalWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={rummyroyal_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>FAST-PLACED CARD PLAY:</h2>
              <p>Guess the outcome and beat the dealer in this exciting, fast-paced game where luck plays a major role in every hand.</p>
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
              <h2>STRATEGIZE TO FORM SEQUENCES:</h2>
              <p>Use your skills to form pure sequences and win the round in this challenging, strategy-based card game.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={rummyroyal_img2} alt='' className='HJ_image'/>
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
            <img src={rummyroyal_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>QUICK ACCESS TO MULTIPLE GAMES:</h2>
              <p>Easily navigate between Rummy, Teen Patti, Andar Bahar, and more through a sleek and organized dashboard.</p>
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
              <h2>TRY YOUR LUCK FOR BONUSES:</h2>
              <p>Spin the wheel daily to win exciting rewards, including coins, bonuses, and special in-game perks to boost your gameplay.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={rummyroyal_img4} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function RummyRoyal() {
    return (
      <div>
        <HeaderRummyroyal/>
        <RummyroyalGP/>
        <Features/>
        <RummyroyalWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }