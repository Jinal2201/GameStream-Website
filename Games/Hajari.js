import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import hjimg from '../Images/Hajari_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import hajariimg1 from '../Images/hajari_img.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import HJ_img1 from '../Images/HAJARI_IMG1.webp';
import HJ_img2 from '../Images/HAJARI_IMG2.webp';
import HJ_img3 from '../Images/HAJARI_IMG3.webp';
import HJ_img4 from '../Images/HAJARI_IMG4.webp';
import HJ_img5 from '../Images/HAJARI_IMG5.webp';
import HJ_img6 from '../Images/HAJARI_IMG6.webp';

function HeaderHJ() {
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
      <h1>HAJARI<br></br><span>_______________________</span></h1>
      <p>Hajari is a multi-card gaming app designed to offer an exciting mix of traditional card games like Teen Patti, Rummy, and other popular card games. It provides players with a platform to enjoy competitive gameplay with friends or other players, along with fun extras like the Spin Wheel for added entertainment and rewards.</p>
      </div>
       </div>
    )
  }

  function HajariGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF HAJARI<br></br>_____________________________</h1>
            <p>Players can dive into different card games, each with its own set of rules and strategies. Whether it's outwitting opponents in Teen Patti or creating winning sequences in Rummy, the game ensures a smooth, engaging experience. Alongside the card games, the Spin Wheel offers chances to win coins and other bonuses. Players can seamlessly switch between card games and enjoy casual play or high-stakes games based on their preferences. The gameplay is enriched with multiplayer options, allowing users to challenge real players or practice with friends.</p>
          </td>
          <td>
            <img src={hajariimg1} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTI-GAME EXPERIENCE:</h3>
          <p>Enjoy a collection of card games like Teen Patti, Rummy, and more, all in one app for endless entertainment.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SPIN WHEEL FOR EXTRA REWARDS:</h3>
          <p>Spin the wheel daily for chances to win exciting prizes, coins, and other bonuses.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> MULTIPLAYER FUN:</h3>
          <p>Challenge friends or join random online players in competitive card games, enhancing the social experience.

</p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> USER-FRIENDLY INTERFACE:</h3>
          <p>Simple and intuitive controls make switching between games and navigating the app a breeze.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY REWARDS:</h3>
          <p>Log in each day to claim special bonuses, including coins and spin chances, to boost your gameplay.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> OFFLINE MODE:</h3>
          <p>Practice your card skills with AI opponents when you don’t have internet access, ensuring you never miss a chance to play.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function HJWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={HJ_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>GAME HUB:</h2>
              <p>Access the built-in dictionary to discover meanings and definitions for every word you connect during gameplay.</p>
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
              <h2>IN THE ACTION:</h2>
              <p>Join thrilling live matches of Teen Patti, Rummy, and more. Play smart, outwit your opponents, and rise to the top.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={HJ_img2} alt='' className='HJ_image'/>
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
            <img src={HJ_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>SWITCH IT UP:</h2>
              <p>Seamlessly switch between multiple card games. Enjoy different twists on classic games, all in one platform.</p>
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
              <h2>TOP OF THE CHARTS:</h2>
              <p>Monitor your rank and compare your performance. Aim to become the ultimate card game champion by climbing the leaderboard.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={HJ_img4} alt='' className='HJ_image'/>
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
            <img src={HJ_img5} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>SPIN FOR REWARDS:</h2>
              <p>Spin the wheel daily and claim exclusive rewards. From coins to bonuses, there’s something exciting every day.</p>
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
              <h2>ACHIEVEMENT UNLOCKED:</h2>
              <p>Celebrate your progress with special achievements. Track your journey, unlock rewards, and rise through the ranks.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={HJ_img6} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function Hajari() {
    return (
      <div>
        <HeaderHJ/>
        <HajariGP/>
        <Features/>
        <HJWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }