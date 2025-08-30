import React from 'react'
import ImageDesign from '../Images/DesignImg.webp';
import './Tab.css';

export default function Design() {
  return (
    <div>
    <table className='TabTable'>
        <tr>
            <td>
                <img src={ImageDesign} alt='designimg' className='TabImg'/>
            </td>
            <td>
                <h1 className="tabh1">CREATIVE GAME DESIGN</h1>
                <span>____________________________________________<br></br>
                ____________________________________________</span>
                <p>At GameStream, the designing phase is where creativity flourishes. Our talented designers collaborate with you to develop captivating concepts that align with your vision. We focus on creating unique characters, stunning environments, and intuitive user interfaces that enhance the overall gaming experience. Through sketches, prototypes, and storyboards, we ensure every detail reflects the essence of your game.</p>
            </td>
        </tr>
    </table>
    </div>
  )
}
