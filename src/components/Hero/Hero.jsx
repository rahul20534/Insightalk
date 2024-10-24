import React from 'react'
import './Hero.css'
//icons
import Parents from '../../assets/heroImage.png';
import Leaf from '../../icons/Leaficon.svg'
import Mother from '../../icons/mother&child.svg'
import rightarrow from '../../icons/right.svg'

//images


const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='consult'>
          <img src={Parents} alt="" />

        </div>

        <div className='heading'>

          <div className='mainheading'>
            <h1>Your <span>One Step Solution</span> For All Things <span>Mental Health</span></h1>
            <p>❤️ We are here for you</p>

          </div>

          <div className='btn'>
            <button>Book An Appointment <img src={rightarrow} alt="" /></button>

          </div>

          <div className='mobilenumber'>
            <p>Or call us at <span>+91 9990-350-234</span></p>

          </div>

        </div>

        <div className='motherandgirlimage'>
          <img src={Leaf} alt="" className='img1' />
          <img src={Mother} alt=""  className='img2'/>




        </div>

      </div>

    </>
  )
}

export default Hero





