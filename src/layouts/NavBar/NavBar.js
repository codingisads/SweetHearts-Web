import React from 'react'
import './NavBar.css';
import { ReactComponent as Logo} from '../../assets/images/logo_cakes1.svg';

function NavBar() {
    return (
        <div>
            <nav className='navbarflex'>
                <Logo className='logo' alt='logo'></Logo>
                <div className='menu'>
                    <a href="#sobre-nosotros">sobre nosotros</a>
                    <a href="#productos">productos</a>
                    <a href="#precios">precios</a>
                    <a href="#contacto">contacto</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar