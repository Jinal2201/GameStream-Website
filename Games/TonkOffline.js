import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import toimg from '../Images/Tonk_offline_bg.jpeg';
import './Hajari.css';
import { GameDiv } from '../pages/Home';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import TO_img1 from '../Images/TO_IMG1.webp';
import TO_img2 from '../Images/TO_IMG2.webp';
import TO_img3 from '../Images/TO_IMG3.webp';


function HeaderTO() {
    return (
      <div>
        <img src={toimg} className='hjimg' alt=''/>
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
      <h1>TONK OFFLINE<br></br><span>_______________________</span></h1>
      <p>The aim of Tonk Offline is to reduce your hand’s total point value by forming sets or runs of cards, or by strategically knocking at <br></br>the right time to outplay your opponents.</p>
      </div>
       </div>
    )
  }

  function TOGP(){
    return(
      <>
      <table className='WCtable1'>
        <tr>
          <td>
            <h1>GAMEPLAY OF A1P TONK OFFLINE<br></br>_____________________________</h1>
            <p>Tonk Offline offers multiple modes of play, including Knock, No-Knock, and Private Tables. Players work to create the best sets of cards or knock when they believe their hand is unbeatable. In Knock mode, players knock when they feel they have a strong hand. In No-Knock, the game continues until someone has played all their cards or has a perfect set. The Private Table feature allows you to play with friends or family.</p>
          </td>
          <td>
            <img src={TO_img2} alt='' className='hajariimg1'/>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> STRATEGIC DICISION MAKING:</h3>
          <p>Players can knock when they think their hand has the lowest value, testing their timing and card analysis skills for a quick win.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> NO KNOWING ALLOWED:</h3>
          <p>Compete without the option to knock, forcing players to fully utilize their cards and strategy until someone clears their hand.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY WITH FRIENDS:</h3>
          <p>Create your own private game room and invite friends to join, allowing for more personalized and intimate gaming sessions.</p>
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
          <h3><FontAwesomeIcon icon={faPaperPlane} /> EXTRA FUN BETWEEN ROUNDS:</h3>
          <p>Enjoy mini-games between rounds that offer additional entertainment and opportunities to win rewards.<br></br><br></br></p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> PLAY ANYTIME,ANYWHERE:</h3>
          <p>No internet connection? No problem! Tonk Offline allows you to enjoy the game without needing an internet connection, perfect for on-the-go play.</p>
        </div>
      </td>
      <td>
        <div>
          <h3><FontAwesomeIcon icon={faPaperPlane} /> TAILOR YOUR EXPERIENCE:</h3>
          <p>Adjust game rules to fit your style or make the game more challenging, ensuring no two rounds are ever the same.<br></br><br></br></p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function TOWorkFlow1(){
    return(
      <>
      <table className='HJwork1'>
        <tr>
          <td>
          <div className='HJDIV1'>
            <img src={TO_img1} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl' />
            <div>
              <h2>WELCOME TO THE TONK OFFLINE:</h2>
              <p>Experience vibrant visuals and a fast-loading screen, setting the stage for your exciting card-matching journey.</p>
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
              <h2>ENGAGE IN INTENSE CARD PLAY:</h2>
              <p>Monitor your hand, analyze your moves, and choose whether to knock or continue in a smooth and immersive playing environment.</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='cr'/> 
            <img src={TO_img2} alt='' className='HJ_image'/>
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
            <img src={TO_img3} alt='' className='HJ_image'/>
            <FontAwesomeIcon icon={faCaretLeft} className='cl'/> 
            <div>
              <h2>QUICK ACCESS TO EVERY MODE:</h2>
              <p>Easily navigate through game modes, including Knock, No-Knock, and Private Tables, with an intuitive layout that gets you into the game fast.</p>
            </div>
            </div>
          </td>
        </tr>
      </table>
      </>
    )
  }
  

export default function TonkOffline() {
    return (
      <div>
        <HeaderTO/>
        <TOGP/>
        <Features/>
        <TOWorkFlow1/>
        <GameDiv/>
        <Footer/>
      </div>
    )
  }