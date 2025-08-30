import React from 'react'
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import Video1 from '../Images/bg_video.mp4';
import './Contact.css';
import { Link } from 'react-router-dom';
import { GameDiv } from './Home';
import Footer from '../common/Footer';
import { useEffect } from "react";
import './Store.css';
import WordConnectStore from '../Images/Word-Connect-Store.webp';
import ColorBounceStore from '../Images/Color-Bounce-Store.png';
import FruitCutStore from '../Images/Fruit-Cut-Store.webp';
import CubejumpStore from '../Images/Cube-Jump-Store.png';
import SudokuStore from '../Images/Sudoku-Store.png';
import CarromBoardStore from '../Images/Carrom-Board-Disc-Game-Store.webp';
import BallPopStore from '../Images/BallPop-Store.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

function StoreHeader(){
  return(
    <>
     <div>
      <video src={Video1} className="video"  autoPlay  loop ></video>
      <img src={Image} className='logo' alt='logo'/>
    <ul className='headerul'>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about-us'}>About Us</Link></li>
      <li><Link to={'/services'}>Services</Link></li>
      <li><Link to={'/potfolio'}>Portfolio</Link></li>
      <li><Link to={'/contact-us'}>Contact Us</Link></li>
      <li><Link to={'/store'}>Store</Link></li>
    </ul>
    <table className="contactHeader">
    <tr>
    <td>
    <h1>Store<br></br><span>__________________________________</span></h1>
    <p className='headerInfo'>Discover endless fun on the go with our collection of captivating mobile games! Dive into exciting adventures, solve challenging puzzles, and compete with friends for the top spot.</p>
    </td>
    <td>
      <img src={Image1} alt='headerImg' className='headerImg'/>
    </td>
    </tr>
    </table>
    </div>
    </>
  )
}

function GameSorceCode(){
  return(
    <>
    <table className='GameSorceCode'>
      <tr>
        <td colSpan={2}>
          <h1>GAMES</h1>
        </td>
      </tr>
      <tr>
        <td>
          <div>
          <img src={WordConnectStore} alt='' className='StoreImg'/>
          <div className='BtnContainor'>
          <Link to={'/store/Word-Connect-Store'} style={{textDecoration:"none"}}><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href="https://play.google.com/store/apps/details?id=com.Gneabit.WordConnect" className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
          </div>
          </div>
        </td>
        <td>
          <div>
            <img src={ColorBounceStore} alt='' className='StoreImg'/>
            <div className='BtnContainor'>
          <Link to={'/store/Color-Bounce-Store'} style={{textDecoration:"none"}}><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://play.google.com/store/apps/details?id=com.gneabit.colorrun' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
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
          <div>
          <img src={FruitCutStore} alt='' className='StoreImg'/>
          <div className='BtnContainor'>
          <Link to={'/store/Fruit-Cut-Store'} style={{textDecoration:"none"}}><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://apps.apple.com/us/app/fruit-cut-tap-to-jump-puzzle/id6738338722' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
          </div>
          </div>
        </td>
        <td>
          <div>
            <img src={CubejumpStore} alt='' className='StoreImg'/>
            <div className='BtnContainor'>
          <Link to={'/store/Cube-Jump-Store'} style={{textDecoration:"none"}} ><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://play.google.com/store/apps/details?id=com.gneabit.CubeJump' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
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
          <div>
          <img src={SudokuStore} alt='' className='StoreImg'/>
          <div className='BtnContainor'>
          <Link to={'/store/Sudoku-Store'} style={{textDecoration:"none"}} ><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://play.google.com/store/apps/details?id=com.gneabit.sudoku' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
          </div>
          </div>
        </td>
        <td>
          <div>
            <img src={CarromBoardStore} alt='' className='StoreImg'/>
            <div className='BtnContainor'>
          <Link to={'/store/Carrom-Board-Store'} style={{textDecoration:"none"}}><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://play.google.com/store/apps/details?id=com.Werbinent.Carrom2D' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
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
          <div>
          <img src={BallPopStore} alt='' className='StoreImg'/>
          <div className='BtnContainor'>
          <Link to={'/store/Ball-Pop-Store'} style={{textDecoration:"none"}}><p>Buy Now <FontAwesomeIcon icon={faCartShopping} /></p></Link>
          <a href='https://play.google.com/store/apps/details?id=com.gneabit.BallPop' className='ademo'><p>Download <FontAwesomeIcon icon={faDownload} /></p></a>
          </div>
          </div>
        </td>
        <td>
          <div>
          </div>
        </td>
      </tr>
    </table>
    </>
  )
}

const  Store= () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
 
  return (
    <>
    <StoreHeader/>
    <GameSorceCode/>
    <GameDiv/>
    <Footer/>
    </>
  )
}
export default Store;