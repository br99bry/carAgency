import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () =>{

  return (
    <>
      <div className="Navbar">
        <div className="NavbarWrapper">
          <div className="NavbarWrapper__burgerMenu">
            <AiOutlineMenu/>
          </div>
          <div className="NavbarWrapper__options">
            <ul>
              <li> <Link to="/"> Inicio   </Link> </li>
              <li> <Link to="/"> Nosotros </Link> </li>
              <li> <Link to="/"> Servicios</Link> </li>
              <li> <Link to="/"> Contacto </Link> </li>
            </ul>
          </div>
          <div className="NavbarWrapper__contactButton">
            <p>Escribenos</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Navbar;