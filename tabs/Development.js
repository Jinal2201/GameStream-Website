import React from 'react'
import ImageDevelopment from '../Images/DevelopmentImg.webp';
import './Tab.css';

export default function Development() {
  return (
    <div>
      <table className='TabTable'>
        <tr>
            <td>
                <img src={ImageDevelopment} alt='developmentimg' className='TabImg'/>
            </td>
            <td>
                <h1 className="tabh2">ROBUST GAME DEVELOPMENT</h1>
                <span>____________________________________________<br></br>
                ____________________________________________</span>
                <p>During the development phase, our skilled engineers and developers bring your game to life. Utilizing the latest technologies and industry best practices, we create robust gameplay mechanics and seamless performance across all platforms. Our iterative approach allows for continuous testing and refinement, ensuring that the final product meets our high standards of quality and engagement.</p>
            </td>
        </tr>
    </table>
    </div>
  )
}

