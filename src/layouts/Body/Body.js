import React from 'react'
import './Body.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import AboutUs from '../AboutUs/AboutUs'
import Products from '../Products/Products'
import Prices from '../Prices/Prices'

function Body() {
    return (
        <div className='box'>
            <SectionTitle title={"sobre nosotros"} keyP={"sobre-nosotros"}></SectionTitle>
            <AboutUs></AboutUs>
            <SectionTitle title={"productos"} keyP={"productos"}></SectionTitle>
            <Products></Products>
            <SectionTitle title={"precios"} keyP={"precios"}></SectionTitle>
            <Prices></Prices>
            <SectionTitle title={"contacto"} keyP={"contacto"}></SectionTitle>
        </div>
    )
}

export default Body