import React, { useRef, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import './styles/Navbar.scss';

import menu from '../assets/img/menu.png'

const Navbar = ( {navbar} ) =>{
  const menuMobileActive = useRef();
  const navbarStiky = useRef();
  const [menuActive, setMenuActive] = useState(false)
  const menuIsActive = () => {
    if(!menuActive){
      console.log(menuMobileActive.current.classList)
      menuMobileActive.current.style.transform='translateX(100%)'
      setMenuActive(true)
    }else{
      console.log(menuMobileActive.current.classList)
      menuMobileActive.current.style.transform='translateX(-100%)'
      setMenuActive(false)
    }
  }

  useEffect( () => {
    window.addEventListener('scroll', () => {
      if( window.pageYOffset > 0 ){
        navbarStiky.current.style.backgroundColor='#191919';
      }else{
        navbarStiky.current.style.backgroundColor='transparent';
      }
    } )
  } );

  return (
    <>
      <div ref={navbarStiky} className="Navbar">
        <div className="NavbarWrapper">
          <div  className="menuMobile">
            <img onClick={ () => ( menuIsActive() ) } src={menu} alt="menu"/>
          
          <nav ref={menuMobileActive} className="menuMobileContent">
            <ul>
            <li onClick={ () => ( menuIsActive() ) } >
              <Link to="/">
                {navbar.links[0]}
              </Link>
              </li>
              <li onClick={ () => ( menuIsActive() ) } >
              <Link to="/">
                {navbar.links[1]}
              </Link>
              </li>
              <li>
                {navbar.links[2]}
                <ul className="submenu">
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/entintadoDeFaros#servicesInicio"> {navbar.servicios[0]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/aerodinamica#servicesInicio"> {navbar.servicios[1]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/filtros#servicesInicio"> {navbar.servicios[2]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/hydrografia#servicesInicio"> {navbar.servicios[3]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/paintProtection#servicesInicio"> {navbar.servicios[4]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/pinturaRines#servicesInicio"> {navbar.servicios[5]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/detaling#servicesInicio"> {navbar.servicios[6]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/sistemasEscape#servicesInicio"> {navbar.servicios[7]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/suspensionDeportiva#servicesInicio"> {navbar.servicios[8]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/valvulasAlivio#servicesInicio"> {navbar.servicios[9]} </Link></li>
                  <li onClick={ () => ( menuIsActive() ) } ><Link to="/wrap#servicesInicio"> {navbar.servicios[10]} </Link></li>
                </ul>         
              </li>
              <li onClick={ () => ( menuIsActive() ) } >
              <Link to="/">
                {navbar.links[3]}
              </Link>
              </li>
            </ul>
          </nav>
          </div>
          <nav role="navigation"  id="menuDesk">
            <div id="menuToggle" className="NavbarWrapper__nav-menuToggle" >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
              <Link to="/">
                {navbar.links[0]}
              </Link>
              </li>
              <li>
              <Link to="/">
                {navbar.links[1]}
              </Link>
              </li>
              <li>
                {navbar.links[2]}
                <ul className="submenu">
                  <li><Link to="/entintadoDeFaros#servicesInicio"> {navbar.servicios[0]} </Link></li>
                  <li><Link to="/aerodinamica#servicesInicio"> {navbar.servicios[1]} </Link></li>
                  <li><Link to="/filtros#servicesInicio"> {navbar.servicios[2]} </Link></li>
                  <li><Link to="/hydrografia#servicesInicio"> {navbar.servicios[3]} </Link></li>
                  <li><Link to="/paintProtection#servicesInicio"> {navbar.servicios[4]} </Link></li>
                  <li><Link to="/pinturaRines#servicesInicio"> {navbar.servicios[5]} </Link></li>
                  <li><Link to="/detaling#servicesInicio"> {navbar.servicios[6]} </Link></li>
                  <li><Link to="/sistemasEscape#servicesInicio"> {navbar.servicios[7]} </Link></li>
                  <li><Link to="/suspensionDeportiva#servicesInicio"> {navbar.servicios[8]} </Link></li>
                  <li><Link to="/valvulasAlivio#servicesInicio"> {navbar.servicios[9]} </Link></li>
                  <li><Link to="/wrap#servicesInicio"> {navbar.servicios[10]} </Link></li>
                </ul>        
              </li>
              <li>
              <Link to="/">
                {navbar.links[3]}
              </Link>
              </li>
            </ul>
            </div>
          </nav>
          <div className="NavbarWrapper__contactButton">
            <div id="button-n">
              <div id="slideN"></div>
              <Link to="/" > 
                <span>{navbar.links[4]}</span>
                {navbar.links[5]} 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

const mapStateToProps = state =>{
  return {
    navbar: state.navbar,
  }
}

export default connect(mapStateToProps,null)(Navbar)