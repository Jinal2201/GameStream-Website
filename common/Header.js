import React from 'react';
import Video1 from '../Images/bg_video.mp4';
import './Header.css';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  return (
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
    <table className="headerDiv">
      <tr>
        <td>
    <div>
    <h2>Let's Make<br></br> a Game<br></br></h2>
    <h1>______________</h1>
    <h3>ENGAGING THROUGH PLAY</h3>
    <p className='pInfo'>GameStream makes game design simple and accessible, no matter your experience or skill level. All you need is an idea,<br></br> and we’ll help bring it to life!</p><br></br>
    <p className='headerP'><Link to={'/contact-us'}>Start Project  <FontAwesomeIcon icon={faPaperPlane} /></Link></p>
    </div>
    </td>
    <td>
      <img src={Image1} alt='headerImg'/>
    </td>
    </tr>
    </table>
    
    </div>
  )
}
