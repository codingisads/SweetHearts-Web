import React from 'react'
import './Body.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import AboutUs from '../AboutUs/AboutUs'

function Body() {
    return (
        <div className='box'>
            <SectionTitle title={"sobre nosotros"} keyP={"sobre-nosotros"}></SectionTitle>
            <AboutUs></AboutUs>
            <SectionTitle title={"productos"} keyP={"productos"}></SectionTitle>
        </div>
    )
}

export default Body