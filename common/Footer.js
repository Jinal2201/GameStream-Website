import React from 'react';
import logo from '../Images/App_logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Footer(){
    return(
        <>
        <table className='footerTable'>
        <tr>
            <td>
                <img src={logo} alt='logo' className='footerLogo'/>
            </td>
            <td>
                <p><b>GameStream</b> crafts immersive, innovative gaming experiences, turning ideas into captivating realities with a talented team of creators.</p>
            </td>
        </tr>
        <tr>
            <td>
                <h1>Let's create something cool?</h1>
            </td>
            <td>
            <Link to={'/contact-us'} style={{ textDecoration: "none" }}><h4 className='footerBtn'>Contact Us <FontAwesomeIcon icon={faPaperPlane} /></h4></Link>
            </td>
        </tr>
        </table>
        <table className='footer'>
            <tr>
             <td>
                <div className='container'>
                    <div>
                        <h1>Company</h1>
                        <ul className='footerul'>
                            <li><Link to={'/about-us'} style={{color:"black"}}>About Us</Link></li>
                            <li><Link to={'/services'} style={{color:"black"}}>Services</Link></li>
                            <li><Link to={'/potfolio'} style={{color:"black"}}>Portfolio</Link></li>
                            <li><Link to={'/contact-us'} style={{color:"black"}}>Contact Us</Link></li>
                            <li><Link to={'/store'} style={{color:"black"}}>Store</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Services</h1>
                        <ul  className='footerul'>
                            <li>Game Development</li>
                            <li>Real Money Game Development</li>
                            <li>Free to play game development</li>
                            <li>Unity Game Development</li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h1>Contact Us</h1>
                        <ul  className='footerul'>
                        <li>info@games.webinet.com</li>
                        <li>+91 63543 45959</li>
                        </ul>
                    </div>
                </div>
             </td>
            </tr>
        </table>
        </>
    )
}