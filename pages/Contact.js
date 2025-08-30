import React from 'react';
import Video1 from '../Images/bg_video.mp4';
import './Contact.css';
import { Link } from 'react-router-dom';
import Image from '../Images/App_logo.png';
import Image1 from '../Images/headerImg.webp';
import formimg from '../Images/contact_form.webp';
import Footer from '../common/Footer.js';
import { GameDiv } from './Home.js';
import { useEffect } from "react";

function ContactHeader(){
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
    <h1>Contact Us<br></br><span>__________________________________</span></h1>
    <p className='headerInfo'>"Reach Out to Us Today and Let's Collaborate to Bring Your Vision to Life in the Exciting World of Gaming!"</p>
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

function ContactForm(){
  return(
    <>
    <table className='formtable'>
      <tr>
        <td className='imgtd'>
        <img src={formimg} alt='' className='formimg'/>
        <h1 className='formh1'>FEEL FREE TO DROP US A LINE</h1>
        <p className='formp'>Fill out the form below, and our team will get back to you as soon as possible:</p>
        </td>
        <td>
          <table>
          <tr>
            <td>
              <input type='text' placeholder='Name*' required/>
            </td>
            <td>
              <input type='email' placeholder='Email*' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='number' placeholder='Contact Number*' required/>
            </td>
            <td>
              <input type='text' placeholder='Subject'/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <textarea placeholder='Message'></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <input type='file'/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='button' value='SEND'/>
            </td>
          </tr>
          </table>
        </td>
      </tr>
    </table>
    </>
  )
}

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <GameDiv/>
      <Footer/>
    </div>
  )
};
export default Contact;