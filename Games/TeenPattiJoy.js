import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import tpjimg from '../Images/Teen_PJ_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import TPJ_img1 from '../Images/TPJ_IMG1.webp';
import TPJ_img2 from '../Images/TPJ_IMG2.webp';
import TPJ_img3 from '../Images/TPJ_IMG3.webp';
import TPJ_img4 from '../Images/TPJ_IMG4.webp';
import TPJ_img5 from '../Images/TPJ_IMG5.webp';
import TPJ_img6 from '../Images/TPJ_IMG6.webp';

function HeaderTPJ() {
    return (
      <div>
        <img src={tpjimg} className='hjimg' alt=''/>
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
      <h1>TEEN PATTI JOY<br></br><span>_______________________</span></h1>
      <p>Teen Patti Joy offers an all-in-one platform with exciting games like Roulette Cushion, Teen Patti, Ludo, and Poker. The aim is to<br></br> provide a variety of fun, competitive games where players can test their skills, luck, and strategy.</p>
      </div>
       </div>
    )
  }

  function TPJGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF TEEN PATTI JOY<br></br>_____________________________</h1>
            <p>In Teen Patti Joy, you can enjoy different game modes: take a chance in Roulette Cushion, show off your Teen Patti skills, engage in strategic battles in Ludo, or bluff your way to victory in Poker. Each game comes with its own set of rules, challenges, and opportunities to win.</p>
          </td>
          <td>
            <img src={TPJ_img2} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> SPIN AND WIN:</h3>
          <p>Place your bets, spin the wheel, and test your luck. Roulette Cushion offers a classic casino experience with exciting rewards.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> CLASSIC INDIAN CARD GAME:</h3>
          <p>Challenge opponents in this popular Indian card game. Play smart, bluff, and win big with your strategy.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> ROLE THE DICE,RACE TO WIN:</h3>
          <p>A traditional board game with a digital twist. Compete with others to bring all your pieces to the finish line in Ludo.<br></br><br></br></p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> BLUFF AND WIN:</h3>
          <p>Go all in and use your poker skills to outwit your opponents. It’s all about strategy, patience, and calculated risks.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> DAILY SPINS FOR DAILY REWARDS:</h3>
          <p>Spin the wheel every day to claim exciting prizes. The rewards help you enhance your gameplay across all modes.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> INVITE FRIENDS,GET REWARDS:</h3>
          <p>Invite your friends to join Multi Gaming, and both of you will get rewarded. The more you refer, the more you win.<br></br><br></br></p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function TPJWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={TPJ_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>EXPLORE ALL  GAME MODES:</h2>
              <p>Access Roulette Cushion, Teen Patti, Ludo, Poker, and more with ease through the Dashboard. Start your gaming journey now!</p>
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
              <h2>CLAIM GIFTS AND REWARDS:</h2>
              <p>Check your inbox for gifts, rewards, and important updates. Don’t miss out on special in-game offers.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={TPJ_img2} alt='' className='HJ_image'/>
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
            <img src={TPJ_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>SHARE AND EARN TOGETHER:</h2>
              <p>Refer your friends to Multi Gaming, and both of you can earn exclusive rewards. It’s a win-win for everyone.</p>
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
              <h2>SPIN DAILY FOR PRICES:</h2>
              <p>Get a free spin every day and unlock amazing rewards to boost your gameplay. The wheel is always turning in your favor.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={TPJ_img4} alt='' className='HJ_image'/>
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
            <img src={TPJ_img5} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>CLAIM YOUR DAILY REWARDS:</h2>
              <p>Don’t forget to check in every day to claim your free bonus. The more consistent you are, the bigger the rewards!</p>
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
              <h2>STAY INFORMED:</h2>
              <p>Check the notices page for the latest updates, announcements, and special event details. Stay ahead of the game!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/>
            <img src={TPJ_img6} alt='' className='HJ_image'/>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function TeenPattiJoy() {
    return (
      <div>
        <HeaderTPJ/>
        <TPJGP/>
        <Features/>
        <TPJWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }