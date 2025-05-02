import React from 'react'
import '../Products/Products.css'
import img1 from '../../assets/images/products/ig_picture1.png'
import img2 from '../../assets/images/products/ig_picture2.png'
import img3 from '../../assets/images/products/ig_picture3.png'
import heart from '../../assets/images/products/heart.png'

function Products() {
  return (
    <div className='parent'>
        <div className='images-grid'>
            <div className='background-shadow align'>
                <img src={img1} alt='img1'></img>
            </div>
            <div className='background-shadow align'>
                <img src={img2} alt='img2'></img>
            </div>
            <div className='background-shadow align'>
                <img src={img3} alt='img3'></img>
            </div>
        </div>
        <p>bento cakes personalizados | el mejor regalo para tus seres queridos | deliciosos sabores</p>
        <div className='heart'>
            <img src={heart} alt='heart'></img>
        </div>
    </div>
  )
}

export default Products