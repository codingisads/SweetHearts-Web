import React from 'react'
import '../Contact/Contact.css'

import whatsapp from '../../assets/images/contact/whatsapp.png'
import email from '../../assets/images/contact/email.png'
import telefono from '../../assets/images/contact/telefono.png'
import instagram from '../../assets/images/contact/instagram.png'

function Contact() {
  return (
    <div className='contact-parent'>
        <p>para obtener un presupuesto para personalizar tu pastel, ponte en contacto con nosotros:</p>
        <div className='contact-grid'>
            <div>
                <img src={whatsapp} alt='whatsapp'></img>
                <p>escríbenos un Whatsapp</p>
            </div>
            <div>
                <img src={instagram} alt='instagram'></img>
                <p>DM por Instagram</p>
            </div>
            <div>
                <img src={email} alt='email'></img>
                <p>escríbenos un email</p>
            </div>
            <div>
                <img src={telefono} alt='telefono'></img>
                <p>llámanos</p>
            </div>
        </div>
    </div>
  )
}

export default Contact