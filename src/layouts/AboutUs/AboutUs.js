import React from 'react'
import myImage1 from '../../assets/images/about-us/about_us_1.png'
import myImage2 from '../../assets/images/about-us/about_us_2.png'
import '../AboutUs/AboutUs.css'

function AboutUs() {
    return (
        <div className='about-us-section'>
            <div className='lorem-ipsum'><p>Nacimos de la pasión por los detalles, los sabores delicados y la estética minimalista que hace único a cada bocado.
                <br/>Creemos que lo pequeño puede ser poderoso: nuestros pasteles son mini, pero están llenos de sabor, cariño y diseño.
                <br/>Usamos ingredientes frescos y recetas tradicionales con un toque moderno, para crear dulces que no solo saben bien, sino que también inspiran alegría visual.
                <br/>Ya sea que busques sorprender con un regalo especial, celebrar un momento íntimo o simplemente darte un gusto, estamos aquí para hacer de lo cotidiano algo encantador.</p></div>
            <div className='box-images'>
                <div className='circle'></div>
                <img src={myImage2} alt='img2' className='img1'></img>
                <img src={myImage1} alt='img1' className='img2'></img>
            </div>

        </div>
    )
}

export default AboutUs