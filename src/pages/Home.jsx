import React from 'react';
import { connect } from 'react-redux';
import './styles/Home.scss';

import CarrouselHome from '../components/CarruselHome';


import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Home = ( {home} ) => {


  return(
    <>
      <section className="Home">
        <div className="Home__dark">
          <div className="Home__dark-logo">
            <img src={home.homeDarkLogo} alt="logo"/>
          </div>
          <div className="Home__dark-details">
            <h1> {home.homeDarkTitle[0]} <br/> {home.homeDarkTitle[1]} </h1>
            <div className="Home__dark-details-options">
              <div> {home.homeDarkOptions[0]} </div>
              <div> {home.homeDarkOptions[1]} </div>
            </div>
          </div>
        </div>
        <div className="Home__hero">
          <div className="Home__hero-carrousel">
            <CarrouselHome />
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    home: state.home,
  }
}

export default connect(mapStateToProps, null)(Home);