import React from 'react'
import myImage1 from '../../assets/images/about-us/about_us_1.png'
import myImage2 from '../../assets/images/about-us/about_us_2.png'

function AboutUs() {
    return (
        <div className='about-us-section'>
            <div className='lorem-ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>
            <div className='box-images'>
                <div className='circle'></div>
                <img src={myImage2} alt='img2' className='img1'></img>
                <img src={myImage1} alt='img1' className='img2'></img>
            </div>

        </div>
    )
}

export default AboutUs