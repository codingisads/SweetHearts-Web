import React from 'react'
import styles from './NavBar.module.css';
import { ReactComponent as Logo} from '../../assets/images/logo_cakes1.svg';

function NavBar() {
    return (
        // <div className={styles.topnav}>
        //     <img src={myImage} alt='logo'></img>
        //     <a className={styles.active} href="#home">Home</a>
        //     <a href="#news">News</a>
        //     <a href="#contact">Contact</a>
        //     <a href="#about">About</a>
        // </div>
        <div>
            <nav className={styles.navbarflex}>
                <Logo className={styles.logo} alt='logo'></Logo>
                <div className={styles.menu}>
                    <a href="/">sobre nosotros</a>
                    <a href="/servicios">productos</a>
                    <a href="/contacto">precios</a>
                    <a href="/contacto">contacto</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar