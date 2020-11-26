import React, { useRef, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

import './styles/Navbar.scss';

// import menu from '../assets/img/menu.png'

const Navbar = ( {navbar} ) =>{
  const menuMobileActive = useRef();
  const navbarStiky = useRef();
  const menuAnimate = useRef();

  const [menuActive, setMenuActive] = useState(false)
  const menuIsActive = () => {
    menuAnimate.current.classList.toggle('active');
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
          <div   className="menuMobile">
            {/* <img onClick={ () => ( menuIsActive() ) } src={menu} alt="menu"/> */}
            <svg ref={menuAnimate} onClick={ () => ( menuIsActive() ) } className="ham hamRotate ham1" viewBox="0 0 100 100" width="80">
              <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
              <path className="line middle" d="m 30,50 h 40" />
              <path
              className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
            </svg>
            <nav ref={menuMobileActive} className="menuMobileContent">
              <ul>
              <li onClick={ () => ( menuIsActive() ) } >
                <Link to="/">
                  {navbar.links[0]}
                </Link>
                </li>
                <li onClick={ () => ( menuIsActive() ) } >
                <Link to="/nosotros">
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
              <Link to="/nosotros">
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