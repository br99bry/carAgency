import React from 'react';
import './styles/Home.scss';

import carHome1 from '../assets/img/carHome1.jpg';
import fondoHome from '../assets/img/fondoHome.png';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Home = () => {
  return(
    <>
      <section className="Home">
        <div className="Home__dark">
          <div className="Home__dark-logo">
            <img src={fondoHome} alt="logo"/>
          </div>
          <div className="Home__dark-details">
            <h1> H & PERFORMANCE <br/> SMART WORKSHOP </h1>
            <div className="Home__dark-details-options">
              <div> Contacto </div>
              <div> Servicios </div>
            </div>
          </div>
        </div>
        <div className="Home__hero">
          <div className="Home__hero-arows">
            <span className="Home__hero-arows-left">
              <FaArrowLeft/>
            </span>
            <span className="Home__hero-arows-right">
              <FaArrowRight/>
            </span>
          </div>
          <div className="Home__hero-dots">

          </div>
          <div className="Home__hero-details">

          </div>
          <div className="Home__hero-background">
            <img src={carHome1} alt="background"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;