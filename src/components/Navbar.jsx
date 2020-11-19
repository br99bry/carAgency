import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = ( {navbar} ) =>{

  return (
    <>
      <div className="Navbar">
        <div className="NavbarWrapper">
          <nav class="navigation" role="navigation">
            <div id="menuToggle" className="NavbarWrapper__nav-menuToggle" >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link to="/"><li>{navbar.links[0]}</li></Link>
              <Link to="/"><li>{navbar.links[1]}</li></Link>
              <li>
                <Link to="/">{navbar.links[2]}</Link>
                <ul class="submenu">
                  <li><Link to="/">Themes</Link></li>
                  <li><Link to="/">Plugins</Link></li>
                  <li><Link to="/">Tutorials</Link></li>
                </ul>        
              </li>
              <Link to="/"><li>{navbar.links[3]}</li></Link>
            </ul>
            </div>
          </nav>
          <div className="NavbarWrapper__contactButton">
            <div id="button-n">
              <div id="slideN"></div>
              <Link to="/" > {navbar.links[4]} </Link>
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