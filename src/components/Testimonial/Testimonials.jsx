import React from 'react'
import './Testimonials.css'
import Star from '../../icons/star.svg'
import Rightarrow from '../../icons/right.svg';
import Leftarrow from '../../icons/left.svg';

function Testimonials() {
  return (
    <>
      <div className='testiminial'>
        <h2>TESTIMONIALS</h2>
        <div className='star_image'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />

        </div>

        <div className='main_heading'>
          <h1>“This is a sample comment from one of our patients. Lorem Ipsum. LoremIpsum
            Lorem IpsumLorem IpsumLorem Ipsum “This is a sample comment from one of our patients.
            Lorem Ipsum. LoremIpsum Lorem IpsumLorem IpsumLorem Ipsum””
          </h1>
          <p>Our Happy Patient</p>

        </div>

        <div className='btn'>
          <button className='btn1'><img src={Leftarrow} alt=""  className='img'/></button>
          <button className='btn1'><img src={Rightarrow} alt="" className='img'/></button>
        </div>


      </div>
    </>
  )
}

export default Testimonials
