import React from 'react'
import './Work.css'
import arrow from '../../icons/Workarrow.svg'

const Work = () => {
    return (
        <>
            <div className='work'>
                <h2>HOW IT WORKS</h2>
                <div className='mainheading'>
                    <h1>Three Steps to Better <span>Mental Health</span></h1>
                    <p>To ensure a seamless experience from start to finish, follow these simple steps to book your appointment.</p>

                </div>

                <div className='process'>
                    <div className='one'>
                        <h1>1</h1>
                        <h2>Explore</h2>
                        <p>Browse our therapist profiles to find the perfect match for your needs.</p>

                    </div>

                    <img src={arrow} alt="" />

                    <div className='two'>
                        <h1>2</h1>
                        <h2>Book your
                        Appointment</h2>
                        <p>Choose a convenient time slot with your selected therapist. Pay to confirm your session details.</p>

                    </div>

                    <img src={arrow} alt="" className='img2'/>

                    <div className='three'>
                        <h1>3</h1>
                        <h2>Pre-Session</h2>
                        <p>Please sign the consent form and return it before your scheduled session.</p>

                    </div>
                    
                    <img src={arrow} alt="" className='img3'/>

                    <div className='four'>
                        <h1>4</h1>
                        <h2>Session</h2>
                        <span>❤</span>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Work
