import React from 'react'
import './Work.css'
import arrow from '../../icons/Workarrow.svg'

const Work = () => {
    return (
        <>
            <div className='work'>
                <h2>HOW IT WORKS</h2>
                <div className='mainheading'>
                    <h1>Three Steps to <span>Better Health</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>

                </div>

                <div className='process'>
                    <div className='one'>
                        <h1>1</h1>
                        <h2>Heading 1</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </div>

                    <img src={arrow} alt="" />

                    <div className='two'>
                        <h1>2</h1>
                        <h2>Heading 2</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </div>

                    <img src={arrow} alt="" />

                    <div className='three'>
                        <h1>3</h1>
                        <h2>Heading 3</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Work
