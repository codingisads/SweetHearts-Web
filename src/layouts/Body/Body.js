import React from 'react'
import './Body.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import AboutUs from '../AboutUs/AboutUs'
import Products from '../Products/Products'

function Body() {
    return (
        <div className='box'>
            <SectionTitle title={"sobre nosotros"} keyP={"sobre-nosotros"}></SectionTitle>
            <AboutUs></AboutUs>
            <SectionTitle title={"productos"} keyP={"productos"}></SectionTitle>
            <Products></Products>
        </div>
    )
}

export default Body