import React from 'react'
import './Body.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

function Body() {
    return (
        <div className='box'>
            <SectionTitle title={"sobre nosotros"} keyP={"sobre-nosotros"}></SectionTitle>
            <div >
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <div></div>
            </div>
        </div>
    )
}

export default Body