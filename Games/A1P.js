import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import A1Pimg from '../Images/a1p_bg.jpeg';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import A1P_img from '../Images/A1P_IMG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import './WordConnect.css';
import './Hajari.css';
import A1P_img1 from '../Images/A1P_IMG1.webp';
import A1P_img2 from '../Images/A1P_IMG1.webp';
import A1P_img3 from '../Images/A1P_IMG1.webp';
import A1P_img4 from '../Images/A1P_IMG1.webp';
import A1P_img5 from '../Images/A1P_IMG1.webp';
import A1P_img6 from '../Images/A1P_IMG1.webp';

function HeaderA1P() {
    return (
      <div>
        <img src={A1Pimg} className='hjimg' alt=''/>
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
      <h1>A1P<br></br><span>_______________________</span></h1>
      <p>ringing Classic Games Together<br></br>
      A1P offers a diverse collection of classic games like Teen Patti, Ludo, and Rummy, all in one platform. Enjoy a variety of popular<br></br> games and challenge your friends or players from around the world.</p>
      </div>
       </div>
    )
  }

  function A1Ptable1(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF A1P<br></br>_____________________________</h1>
            <p>Play, Compete, and Win<br></br>A1P provides a seamless gaming experience where players can choose from multiple games including card games like Teen Patti, Rummy, and board games like Ludo. Each game comes with its own set of rules and strategies, offering hours of competitive and entertaining gameplay.</p>
          </td>
          <td>
            <img src={A1P_img} alt='' className='hajariimg1'/>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTI-GAME PLATFORM:</h3>
            <p>Enjoy a range of classic games all in one app, from card games to board games, offering something for everyone.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> FEEL THE THRILL OF THE CARDS:</h3>
            <p>Play the popular Indian card game Teen Patti with friends or online players and showcase your strategic skills.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> ROLE THE DICE,RACE TO WIN:</h3>
            <p>Classic Ludo is just a click away. Compete with 2 to 4 players and enjoy the timeless fun of racing to the finish line.</p>
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
            <h3><FontAwesomeIcon icon={faPaperPlane} /> SHARPEN YOUR CARDS SKILLS:</h3>
            <p>Showcase your Rummy prowess with friends or online players, build sequences, and declare your victory.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> REWARDS EVERY DAY:</h3>
            <p>Log in daily to collect bonus coins and enhance your gaming experience with additional rewards.</p>
          </div>
        </td>
        <td>
          <div>
            <h3><FontAwesomeIcon icon={faPaperPlane} /> =MONITOR YOUR PROGRESS:</h3>
            <p>Track your wins, losses, and other game stats in real time, helping you strategize for future games.</p>
          </div>
        </td>
      </tr>
      </table>
      </>
    )
  }

  function A1PWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={A1P_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>YOUR GAME HUB:</h2>
              <p>Access all your favorite games, check daily rewards, and dive into a world of fun from one central screen.</p>
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
              <h2>CLAIM YOUR REWARDS:</h2>
              <p>Log in daily to collect free coins and bonuses that keep your game on track and enhance your chances of winning.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={A1P_img2} alt='' className='HJ_image'/>
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
            <img src={A1P_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>BOOST YOUR BALANCE:</h2>
              <p>Add coins to your account with a single tap and ensure you have enough to play your favorite games.</p>
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
              <h2>TRACK YOUR PERFORMANCE:</h2>
              <p>Check your wins, losses, and game history to improve your strategy and stay ahead of the competition.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={A1P_img4} alt='' className='HJ_image'/>
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
            <img src={A1P_img5} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>CHOOSE AND COMPETE:</h2>
              <p>Select your game, choose your mode, and get ready to compete against players from around the world.</p>
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
              <h2>CUSTOMIZE YOUR EXPERIENCE:</h2>
              <p>Adjust game settings, sound preferences, and more to make your A1P gaming experience truly personal.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={A1P_img6} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }

  export default function A1P() {
      return (
        <div>
          <HeaderA1P/>
          <A1Ptable1/>
          <Features/>
          <A1PWorkFlow1/>
          <GameDiv/>
          <Footer/>
        </div>
      )
    }