import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import whats from '../assets/img/whatsapp.png';
import './styles/WhatsApp.scss'

const WhatsApp = () => {
  return(
    ReactDom.createPortal(
    <div className="WhatsApp">
      <a href="https://api.whatsapp.com/send?phone=525563196673" >
      <img src={whats} alt="whats app"/>
      </a>
    </div>,
    document.getElementById('whatsApp')
    )
  )
}

export default WhatsApp;