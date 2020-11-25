import React from 'react';
import ReactDom from 'react-dom';

import { ImWhatsapp } from 'react-icons/im';
import './styles/WhatsApp.scss'

const WhatsApp = () => {
  return(
    ReactDom.createPortal(
    <div className="WhatsApp">
      <a href="https://api.whatsapp.com/send?phone=525563196673" >
        <ImWhatsapp/>
      </a>
    </div>,
    document.getElementById('whatsApp')
    )
  )
}

export default WhatsApp;