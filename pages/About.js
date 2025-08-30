import React from 'react'
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import Video1 from '../Images/bg_video.mp4';
import './Contact.css';
import { Link } from 'react-router-dom';
import aboutImg from '../Images/aboutimg.webp';
import './About.css';
import ourvalueImg1 from '../Images/ourvalueImg1.webp';
import ourvalueImg2 from '../Images/ourvalueImg2.webp';
import ourvalueImg3 from '../Images/ourvaluesImg3.webp';
import ourvalueImg4 from '../Images/ourvaluesImg4.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import chooseImage from '../Images/chooseusImg.webp';
import Footer from '../common/Footer.js';
import { GameDiv } from './Home.js';
import { useEffect } from "react";

function AboutHeader(){
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
    <h1>About Us<br></br><span>__________________________________</span></h1>
    <p className='headerInfo'>"Passionate Creators Committed to Crafting Unique Gaming Experiences That Inspire and Engage Players Around the World."</p>
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

function AboutTable(){
  return(
    <>
    <table className='abouttable'>
      <tr>
        <td>
          <img src={aboutImg} alt='aboutimg' className='aboutImg'/>
        </td>
        <td>
          <h1>ABOUT WEBINENT GAMES<br></br>_______________________________________</h1>
          <p>At <b>GameStream</b>, we’re passionate creators of immersive, innovative, and dynamic games that redefine the gaming landscape. As a leading game development company, we specialize in crafting experiences that not only captivate players but also push the boundaries of technology and creativity. Our dedicated team of designers, developers, and storytellers collaborates to bring bold visions to life, delivering games that leave a lasting mark.<br></br>
          From initial concept to polished final product, we oversee every phase of the game development process, ensuring top-tier quality at every step. Our commitment to innovation, inclusivity, and collaboration drives us to design games that resonate with diverse audiences, providing unforgettable experiences that engage, inspire, and entertain. Join us as we shape the future of gaming!</p>
        </td>
      </tr>
    </table>
    </>
  )
}

function Yeartab(){
  return(
    <>
    <table className='yearTab'>
    <tr>
      <td>
        <div>
          <h1>4+</h1>
          <h2>YEAR OF<br></br> EXPERIENCE</h2>
        </div>
      </td>
      <td>
        <div>
          <h1>20+</h1>
          <h2>FINALIZED<br></br> PROJECTS</h2>
        </div>
      </td>
      <td>
        <div>
          <h1>10+</h1>
          <h2>COMPETEMENT<br></br> WORKFORCE</h2>
        </div>
      </td>
      <td>
        <div>
          <h1>15+</h1>
          <h2>COLLABORATORS</h2>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function Ourvalue(){
  return(
    <>
    <table className='ourvalueTable'>
    <tr>
      <td colSpan={4}>
        <h1>OUR VALUES</h1>
      </td>
    </tr>
    <tr>
      <td>
        <div>
          <img src={ourvalueImg1} alt='ourvalueImg'/>
          <h2>CREATIVITY</h2>
          <p>We believe in the power of imagination and strive to push the boundaries of what’s possible in game design and development. Our creative spirit fuels our passion for crafting unique and captivating gaming experiences.</p>
        </div>
      </td>
      <td>
        <div>
          <img src={ourvalueImg2} alt='ourvalueImg'/>
          <h2>INNOVATION</h2>
          <p>Embracing cutting-edge technology and new ideas is at the heart of our approach. We continuously seek innovative solutions that enhance gameplay, ensuring our games stand out in a competitive landscape.</p>
        </div>
      </td>
      <td>
        <div>
          <img src={ourvalueImg3} alt='ourvalueImg'/>
          <h2>COLLABORATION</h2>
          <p>Teamwork is essential to our success. We foster a collaborative environment where every voice is valued, encouraging open communication and synergy among our designers, developers, and storytellers.</p>
        </div>
      </td>
      <td>
        <div>
          <img src={ourvalueImg4} alt='ourvalueImg'/>
          <h2>QUALITY</h2>
          <p>Our dedication to excellence drives us to deliver high-quality games that meet the highest standards. We pay meticulous attention to detail in every aspect of development, ensuring an exceptional experience for players.</p>
        </div>
      </td>
    </tr>
    </table>
    </>
  )
}

function Chooseus(){
  return(
    <>
    <table className='chooseTable'>
      <tr>
        <td>
          <h1>WHY CHOOSE US?<br></br>__________________________________</h1>
          <h2><FontAwesomeIcon icon={faPaperPlane} /> EXPERTISE & INNOVATION</h2>
          <p>Our team stays ahead of the curve, using the latest technologies to create cutting-edge games that captivate and inspire.</p>
          <br></br>
          <h2><FontAwesomeIcon icon={faPaperPlane} /> TAILORED SOL</h2>
          <p>We work closely with you to understand your vision and deliver custom gaming experiences that align with your goals.</p>
          <br></br>
          <h2><FontAwesomeIcon icon={faPaperPlane} /> CREATIVE EXCELLENCE</h2>
          <p>With a passion for creativity, we design games that are visually stunning, engaging, and unique, ensuring players are fully immersed.</p>
          <br></br>
          <h2><FontAwesomeIcon icon={faPaperPlane} /> END-TO-END SERVICES</h2>
          <p>From concept and design to development and launch, we offer full-cycle game development services to bring your ideas to life.</p>
        </td>
        <td>
          <img src={chooseImage} alt='chooseusImg'/>
        </td>
      </tr>
    </table>
    </>
  )
}




const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
    <AboutHeader/>
    <AboutTable/>
    <Yeartab/> 
    <Ourvalue/>
    <Chooseus/>
    <GameDiv/>
    <Footer/>
    </>
  )
};
export default About;