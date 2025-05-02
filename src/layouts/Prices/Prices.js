import React from 'react'
import '../Prices/Prices.css'

function Prices() {
    return (
        <div className='prices-parent'>
            <div className='prices-child'>
                <h2>bento cake (mini cakes)</h2>
                <div className='prices-section'>
                    <h3>sabores</h3>
                    <ul className='ul-section'>
                        <li>chocolate <span>+ 5,2</span></li>
                        <li>vainilla <span>+ 4,2</span></li>
                    </ul>
                </div>
                <div className='prices-section'>
                    <h3>rellenos (por capa)</h3>
                    <ul className='ul-section'>
                        <li>dulce de leche <span>+ 4,5</span></li>
                        <li>brigadeiro
                            <ul className='ul-section'>
                                <li>de chocolate blanco <span>+ 2</span></li>
                                <li>de chocolate con leche <span>+ 2</span></li>
                            </ul>
                        </li>
                        <li>nata <span>+ 1,9</span></li>
                        <li>buttercream <span>+ 1,4</span></li>
                        <li>personalizado <span>+ a consultar</span></li>
                    </ul>
                </div>
                <div className='prices-section'>
                    <h3>decoración</h3>
                    <ul className='ul-section'>
                        <li>estilos disponibles <span>+ 1,5</span></li>
                        <li>personalizado <span>+ a consultar</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prices