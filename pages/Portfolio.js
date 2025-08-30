import React from 'react'
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import Video1 from '../Images/bg_video.mp4';
import './Contact.css';
import { Link } from 'react-router-dom';
import wordconnect from '../Images/word_connect.webp';
import hajari from '../Images/Hajari.webp';
import backgammon from '../Images/Backgammon.webp';
import './Portfolio.css';
import playing7 from '../Images/Playing7.webp';
import rummy from '../Images/Rummy.webp';
import teenpattilakh from '../Images/Teen_patti_lakh.webp';
import A1P from '../Images/A1P.webp';
import blockpuzzle from '../Images/Block_puzzle.webp';
import colorrun from '../Images/Color_run.webp';
import callbreak from '../Images/Call_break.webp';
import teenpattijoy from '../Images/Teen_patti_joy.webp';
import indianrummy from '../Images/Indian-rummy.webp';
import holdempoker from '../Images/HOLDEM POKER.webp';
import aipteenpatti from '../Images/A1P_TEEN_PATTI.webp';
import tonkoffline from '../Images/TONK_OFFLINE.webp';
import yono from '../Images/YONO.webp';
import a1pludo from '../Images/A1P_LUDO.webp';
import rummyroyal from '../Images/Rummy_Royal.webp';
import teenpattidiamond from '../Images/TEEN_PATTI_DIAMOND.webp';
import { GameDiv } from './Home';
import Footer from '../common/Footer';
import { useEffect } from "react";

function PortfolioHeader(){
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
    <h1>Portfolio<br></br><span>__________________________________</span></h1>
    <p className='headerInfo'>Innovating the Future of Gaming, One Immersive Experience at a Time.</p>
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

function Gamegallery(){
  return(
    <>
    <div className='gamegallery'>
    <div className="gallery">
        <div className="item">
          <Link to={'/portfolio/WordConnect'}><img src={wordconnect} alt=""/></Link>
          <h1 className='wc'>WORD CONNECT</h1>
        </div>
        <div className="item">
        <Link to={'/portfolio/Hajari'}><img src={hajari} alt=""/></Link>
          <h1 className='hj'>HAJARI</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/BackGammon'}><img src={backgammon} alt=""/></Link> 
          <h1 className='bg'>BACKGAMMON</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/Playing7'}> <img src={playing7} alt=""/></Link>
          <h1 className='p7'>PLAYING7</h1>
        </div>
        </div>

        <div className="gallery">
        <div className="item">
        <Link to={'/potfolio/Rummy'}><img src={rummy} alt=""/></Link> 
          <h1 className='ry'>RUMMY</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/TeenPattiLakh'}><img src={teenpattilakh} alt=""/></Link>
          <h1 className='tpl'>TEEN PATTI LAKH</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/A1P'}><img src={A1P} alt=""/></Link>  
          <h1 className='a1p'>A1P</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/BlockPuzzle'}><img src={blockpuzzle} alt=""/></Link>
          <h1 className='bp'>BLOCK PUZZLE</h1>
        </div>
    </div>

    <div className="gallery">
        <div className="item">
        <Link to={'/potfolio/ColorRun'}>  <img src={colorrun} alt=""/></Link>
          <h1 className='color_run'>COLOR RUN</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/CallBreak'}><img src={callbreak} alt=""/></Link>
          <h1 className='cb'>CALL BREAK</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/Teen-Patti-Joy'}><img src={teenpattijoy} alt=""/></Link>  
          <h1 className='tpj'>TEEN PATTI JOY</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/Indian-Rummy'}><img src={indianrummy} alt=""/></Link>  
          <h1 className='ir'>INDIAN RUMMY</h1>
        </div>
    </div>

    <div className="gallery">
        <div className="item">
        <Link to={'/potfolio/Holdem-poker'}><img src={holdempoker} alt=""/></Link>  
          <h1 className='hmp'>HOLDEM POKER</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/a1p-teen-patti'}><img src={aipteenpatti} alt=""/></Link>  
          <h1 className='atp'>A1P TEEN PATTI</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/tonk-offline'}><img src={tonkoffline} alt=""/></Link>
          <h1 className='to'>TONK OFFLINE</h1>
        </div>
        <div className="item">
        <Link to={'/potfolio/yono'}><img src={yono} alt=""/></Link>  
          <h1 className='yn'>YONO</h1>
        </div>
    </div>

    <table>
      <tr>
        <td>
        <div className="itemtd">
        <Link to={'/potfolio/a1p-ludo'}><img src={a1pludo} alt="" className='ludo'/></Link>  
          <h1 className='al'>A1P LUDO</h1>
        </div>
        </td>
        <td>
        <div className="itemtd">
        <Link to={'/potfolio/rummy-royal'}><img src={rummyroyal} alt="" className='royal'/></Link>  
          <h1 className='rr'>RUMMY ROYAL</h1>
        </div>
        </td>
        <td>
        <div className="itemtd">
        <Link to={'/potfolio/teen-patti-diamond'}><img src={teenpattidiamond} alt="" className='diamond'/></Link>  
          <h1 className='tpd'>TEEN PATTI DIAMOND</h1>
        </div>
        </td>
      </tr>
    </table>
     </div>
    </>
  )
}

const  Portfolio= () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
 
  return (
    <>
    <PortfolioHeader/>
    <Gamegallery/>
    <GameDiv/>
    <Footer/>
    </>
  )
}
export default Portfolio;