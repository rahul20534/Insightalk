import React from 'react'
import './Slogan.css'
import Quote from '../../icons/quote.svg'
import circle from '../../icons/Ellipse.svg'

const Slogan=()=> {
  return (
    <>
    <div className='slogan'>
        <img src={Quote} className='img1'/>
        <div className='head'>
            <h1>Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going.</h1>
            <p>Noam Shpancer, PhD</p>
        </div>

        <img src={circle} className='img2' />

    </div>
    
    </>
  )
}

export default Slogan
