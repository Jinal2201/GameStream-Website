import React from 'react'
import ImageDesign from '../Images/DeliveryImg.webp';
import './Tab.css';

export default function Delivery() {
  return (
    <div>
       <table className='TabTable'>
        <tr>
            <td>
                <img src={ImageDesign} alt='designimg' className='TabImg'/>
            </td>
            <td>
                <h1 className="tabh1">SEAMLESS GAME DELIVERY</h1>
                <span>____________________________________________<br></br>
                ____________________________________________</span>
                <p>Once the development is complete, we move on to the delivery phase. Here, we meticulously prepare your game for launch, ensuring it is optimized and fully functional. We provide comprehensive support throughout the launch process and beyond, including marketing strategies and user engagement plans. Our commitment to excellence ensures your game is not just released, but celebrated by players worldwide.</p>
            </td>
        </tr>
    </table>
    </div>
  )
}
