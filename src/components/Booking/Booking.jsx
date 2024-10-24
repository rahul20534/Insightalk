import React from 'react'
import './Booking.css'
import rightarrow from '../../icons/right.svg'
import circle_one from '../../assets/circle1.png';
import circle_two from '../../assets/circle2.png';
import circle_three from '../../assets/circle3.png';
import circle_four from '../../assets/circle4.png';



const Booking = () => {
  return (
    <>
      <div className='booking'>
        <div className='mainbooking'>
          <div className='headings'>
            <h2>Book Your First Session with</h2>
            <h1>Insightalk</h1>
            <p>❤️ We are here for you</p>

          </div>

          <div className='but'>
            <button>Book An Appointment <img src={rightarrow} alt="" /></button>
            <p className='para'>Or call us at <span>+91 9990-350-234</span></p>

          </div>

          <div className='circle'>
            <img src={circle_one} alt="" className='circle_one'/>
            

          </div>

        </div>

      </div>

    </>
  )
}

export default Booking
