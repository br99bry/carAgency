import React from 'react';
import { connect } from 'react-redux';

import './styles/About.scss';

const About = ( {about} ) => {
  return (
    <>
      <section className="About">
        <div className="About__hero-container">
          <img src={about.imgHero} alt="nosotros" className="About__hero"/>
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
    </>
  )
} 

const mapStateToProps = state => {
  return {
    about: state.about,
  }
}

export default connect(mapStateToProps)(About);