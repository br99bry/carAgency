import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = ( {navbar} ) =>{

  return (
    <>
      <div className="Navbar">
        <div className="NavbarWrapper">
          <div className="NavbarWrapper__burgerMenu">
            <AiOutlineMenu/>
          </div>
          <div className="NavbarWrapper__options">
            <ul>
              <li> <Link to="/"> {navbar.links[0]}  </Link> </li>
              <li> <Link to="/"> {navbar.links[1]} </Link> </li>
              <li> <Link to="/"> {navbar.links[2]} </Link> </li>
              <li> <Link to="/"> {navbar.links[3]} </Link> </li>
            </ul>
          </div>
          <div className="NavbarWrapper__contactButton">
            <p> {navbar.links[4]} </p>
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