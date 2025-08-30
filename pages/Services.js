import React from 'react';
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import Video1 from '../Images/bg_video.mp4';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import exploreImg from '../Images/exploreImg.webp';
import Footer from '../common/Footer';
import { GameDiv } from './Home';
import { useEffect } from "react";

function ServiceHeader(){
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
    <h1>Services<br></br><span>__________________________________</span></h1>
    <p className='headerInfo'>"Comprehensive Game Development Solutions Tailored to Transform Your Ideas into Innovative, Immersive Gaming Experiences."</p>
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

function LaunchTable(){
  return(
    <>
    <div className='LaunchDiv'>
    <h1>FROM CONCEPT TO LAUNCH:GAME DEVELOPMENT<br></br>__________________________________</h1>
    <p>At <b>GameStream</b>, we are committed to transforming your vision into reality across multiple platforms with our expert game design and development services. In today’s digital age, games have become the universal language, and we specialize in leveraging their power to help you achieve your objectives.</p>
    <p>Our passionate team combines creativity and cutting-edge technology to develop immersive and engaging gaming experiences. Whether you're aiming for cross-platform, console, or mobile games, we have the expertise to bring your ideas to life.</p>
    <Link to={'/contact-us'} style={{ textDecoration: "none" }}><p className='LaunchBtn'>Contact Us <FontAwesomeIcon icon={faPaperPlane} /></p></Link>
    </div>
    </>
  )
}

function DivTable(){
  return(
    <>
    <table className='divtable1'>
      <tr>
        <td>
          <h1>GAME DEVELOPMENT</h1>
        </td>
        <td>
          <div className='divcontainer1'>
            <p>Custom Game Design</p>
            <p>Multi-platform Development</p>
            <p>Immersive User Experience</p>
            <p>Stunning Visuals and Animation</p>
          </div>
          <p className='divtableInfo'>At GameStream, we specialize in creating engaging and immersive game experiences across a variety of genres and platforms. From initial concept to final release, we handle every step of the process with a focus on creativity, innovation, and high-quality execution. Whether it's crafting rich narratives or building intricate gameplay mechanics, our team ensures that every project delivers captivating, memorable experiences for players.</p>
        </td>
      </tr>
    </table>
    <table className='divtable1'>
    <tr>
      <td>
        <h1>REAL MONEY GAME DEVELOPMENT</h1>
      </td>
      <td>
        <div className='divcontainer1'>
          <p>Secure Payment System</p>
          <p>Anti-Fraud Protection</p>
          <p>Regulatory Compliance</p>
          <p>Skilled and Luck-Based Games</p>
        </div>
        <p className='divtableInfo'>We are experts in Real Money Game Development, designing games that offer players the thrill of competition with real stakes. Our focus is on creating secure, fair, and engaging real-money gaming environments that comply with regulations. Whether it’s skill-based games or chance-based games, we develop robust platforms that deliver smooth user experiences while ensuring top-level security and transparency for all players.</p>
      </td>
    </tr>
  </table>
  <table className='divtable1'>
  <tr>
    <td>
      <h1>FREE-TO-PLAY GAME DEVELOPMENT</h1>
    </td>
    <td>
      <div className='divcontainer1'>
        <p>Effective Monetization Models</p>
        <p>Reward and Progression Systems</p>
        <p>Social <br/>Features</p>
        <p>In-Game Economy Design</p>
      </div>
      <p className='divtableInfo'>Our Free-to-Play Game Development services are designed to build games that attract and retain a broad audience. We create engaging games with thoughtful monetization strategies that encourage long-term play. By offering exciting in-game purchases, rewards, and progression systems, we ensure that players keep coming back for more while also generating revenue for your game.</p>
    </td>
  </tr>
</table>
<table className='divtable1'>
      <tr>
        <td>
          <h1>UNITY GAME DEVELOPMENT</h1>
        </td>
        <td>
          <div className='divcontainer1'>
            <p>Cross Platform Support</p>
            <p>2D-3D Game Development</p>
            <p>Optimized Gameplay</p>
          </div>
          <p className='divtableInfo'>Our expertise in Unity Game Development allows us to build stunning and highly performant games that work seamlessly across multiple platforms. Whether it's mobile, console, or PC, Unity's powerful engine gives us the flexibility to develop visually appealing and technically robust games. Our team leverages Unity's full potential to create immersive 2D and 3D experiences that captivate players and push creative boundaries.</p>
        </td>
      </tr>
    </table>
    </>
  )
}

function Explore(){
  return(
    <table className='exploreTable'>
      <tr>
        <td>
          <img src={exploreImg} alt='exploreImg'/>
        </td>
        <td>
          <h2>Explore the world of Webinent, where creativity merges with technology, and your visions are transformed into digital realities.<br></br>
          __________________________________</h2>
          <p>With our holistic approach to game development at <b>GameStream</b>, we seamlessly integrate design, creation, and player engagement into one fluid journey. From the initial concept to post-launch strategies, we support you at every stage, ensuring your game not only captivates but also connects with players worldwide.</p>
          <p>Our team of experts excels in crafting immersive experiences, using innovative gameplay mechanics and stunning visuals. By leveraging cutting-edge technology and industry-leading practices, we deliver games that stand out in a competitive market. Whether it’s building intricate storylines, designing engaging gameplay, or implementing advanced multiplayer features, <b>GameStream</b> is dedicated to turning your vision into an unforgettable gaming experience.</p>
        </td>
      </tr>
    </table>
  )
}



const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
 
  return (
    <>
    <ServiceHeader/>
    <LaunchTable/>
    <DivTable/>
    <Explore/>
    <GameDiv/>
    <Footer/>
    </>
  )
}

export default Services;