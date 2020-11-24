import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = ( {navbar} ) =>{

  return (
    <>
      <div className="Navbar">
        <div className="NavbarWrapper">
          <nav role="navigation">
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
                <Link to="/">{navbar.links[2]}</Link>
                <ul className="submenu">
                  <li><Link to="/entintadoDeFaros"> {navbar.servicios[0]} </Link></li>
                  <li><Link to="/aerodinamica"> {navbar.servicios[1]} </Link></li>
                  <li><Link to="/filtros"> {navbar.servicios[2]} </Link></li>
                  <li><Link to="/hydrografia"> {navbar.servicios[3]} </Link></li>
                  <li><Link to="/paintProtection"> {navbar.servicios[4]} </Link></li>
                  <li><Link to="/pinturaRines"> {navbar.servicios[5]} </Link></li>
                  <li><Link to="/detaling"> {navbar.servicios[6]} </Link></li>
                  <li><Link to="/sistemasEscape"> {navbar.servicios[7]} </Link></li>
                  <li><Link to="/suspensionDeportiva"> {navbar.servicios[8]} </Link></li>
                  <li><Link to="/valvulasAlivio"> {navbar.servicios[9]} </Link></li>
                  <li><Link to="/wrap"> {navbar.servicios[10]} </Link></li>

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
                {navbar.links[4]} 
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