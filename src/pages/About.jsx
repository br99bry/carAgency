import React from 'react';
import { connect } from 'react-redux';

import './styles/About.scss';
import Footer from '../components/Footer';

const About = ( {about} ) => {
  return (
    <>
      <section className="About">
        <div className="About__hero-container">
          <img src={about.imgHero} alt="nosotros" className="About__hero"/>
          <div>
            <h1> Nosotros </h1>
            <p> Inicio - Nosotros </p>
          </div>
        </div>
        <div className="About__content">
          <div className="About__contendt-grid">
            <div>
              <img src={about.decorate} alt=""/>
            </div>
            <div>
              <h1> {about.title} </h1>
              <p> {about.details} </p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
} 

const mapStateToProps = state => {
  return {
    about: state.about,
  }
}

export default connect(mapStateToProps)(About);