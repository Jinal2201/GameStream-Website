import Header from '../common/Header';
import Image2 from '../Images/table1img.jpg';
import Image3 from '../Images/table1img1.webp';
import './Home.css';
import { Link } from 'react-router-dom';
import List from '../tabs/List.js';
import ShowcaseImage1 from '../Images/showcaseimg1.webp';
import ShowcaseImage2 from '../Images/showcaseimg2.webp';
import ShowcaseImage3 from '../Images/showcaseimg3.webp';
import ShowcaseImage4 from '../Images/showcaseimg4.webp';
import Videobg from '../Images/bg_video2.mp4';
import CommitmentImage from '../Images/commitmentImg.webp';
import Slider from '../sliders/slider.js';
import Footer from '../common/Footer.js';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function Table1(){
  return(
    <>
    <table className="table1">
            <tr>
              <td>
                <img src={Image2} alt="frontimg" className="table1img1"/>
                <div className="table1div1">4<br></br>YEARS</div>
              </td>
              <td className="table1td1">
                <h1>Leading Experts in Game Creation and Development</h1>
                <p className="table1P1">__________________________________<br></br>
                __________________________________</p>
                
                <p>Welcome to <b>GameStream</b>, a creative powerhouse where every detail weaves into a vibrant narrative. From initial sketches to intricate character designs, our talented artists breathe life into every element of our games. We are passionate about redefining visual storytelling, crafting stunning environments that transport players into fully immersive worlds.</p>
                <p>As a leading game development studio in Ahmedabad, our expert engineers and developers harness the latest technologies to deliver seamless gaming experiences. Whether it’s developing complex gameplay mechanics or optimizing performance across all platforms, our mission is to create games that captivate, engage, and inspire. Join us on this journey to push the boundaries of what's possible in gaming!</p>
                <center><p className="Btn"><Link to={'/about-us'}>Read More</Link></p></center>
              </td>
              <td>
                <img src={Image3} alt="frontimg" className="table1img2"/>
              </td>
            </tr>
          </table>
    </>
  )
}

function Showcase(){
  return(
    <>
    <table className='showCasetable'>
      <tr>
        <td colspan={2}>
          <h1>SHOWCASE EXCELLENCE</h1>
        </td>
        <td colSpan={2}>
          <Link to={'/potfolio'} style={{textDecoration:"none"}}><p>View More <FontAwesomeIcon icon={faPaperPlane} /></p></Link>
        </td>
      </tr>
      <tr>
        <td>
          <img src={ShowcaseImage1} alt='' className='showCaseImg'/>
        </td>
        <td>
          <img src={ShowcaseImage2} alt='' className='showCaseImg'/>
        </td>
        <td>
          <img src={ShowcaseImage3} alt='' className='showCaseImg'/>
        </td>
        <td>
          <img src={ShowcaseImage4} alt='' className='showCaseImg'/>
        </td>
      </tr>
    </table>
    </>
  )
}

function Video(){
  return(
    <>
    <video src={Videobg} className="video1"  autoPlay  loop ></video>
    <div className='videoDiv'>
    <h1>Bringing Ideas to Life</h1>
    <p>At GameStream, we take your concepts and turn them into immersive, engaging <br></br>experiences. Our expert team transforms visions into fully realized games that <br></br>captivate and inspire.</p>
    </div>
    </>
  )
}
function Commitment(){
  return(
    <>
     <table className='commitmentTable'>
      <tr>
        <td>
          <h1>OUR COMMITMENT<br></br>_______________________________________</h1>
          <p className='commitmentp'>At GameStream, our aspiration is to revolutionize the gaming industry by creating innovative and engaging experiences that resonate with players worldwide. We aim to push the boundaries of technology and creativity, crafting games that not only entertain but also inspire and connect people across cultures.
          We believe in the transformative power of gaming, and our mission is to design immersive worlds that captivate players and foster community. With a focus on inclusivity, we strive to create games that everyone can enjoy, ensuring that diverse voices and perspectives are represented in our projects.</p>
          <Link to={'/services'} style={{textDecoration:'none'}}><p className='commitmetnBtn'>Show More</p></Link>
        </td>
        <td>
          <img src={CommitmentImage} alt=''/>
        </td>
      </tr>
     </table>
    </>
  )
}

export function GameDiv(){
  return(
    <>
    <div className='gameDiv'>
      <h1>G&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;S</h1>
    </div>
    <h2 className='gameh2'>G&nbsp;&nbsp;A&nbsp;&nbsp;M&nbsp;E&nbsp;&nbsp;S&nbsp;&nbsp;T&nbsp;R&nbsp;&nbsp;E&nbsp;&nbsp;A&nbsp;&nbsp;M</h2>
    </>
  )
}

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
 
  return (
    <div>
      <Header/>
      <Table1/>
      <List/>
      <Showcase/>
      <Video/>
      <Commitment/>
      <Slider/>
      <GameDiv/>
      <Footer/>
    </div>
  )
}
export default Home;
