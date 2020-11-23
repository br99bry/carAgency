import React from 'react';

import './styles/AboutWhitSliderDetails.scss';
import faros from '../assets/img/faros.jpg';

const AboutWhitSliderDetails = ( {data} ) => {
  return (
    <>
    <section className="AboutWhitSliderDetails">
      <div className="AboutWhitSliderDetails__detailsDescription">
        <h2> {data.title} </h2>
        <p> {data.details} </p>
        <div className="AboutWhitSliderDetails__detailsDescription-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="AboutWhitSliderDetails__img">
        <img src={faros} alt=""/>
      </div>
    </section>
    </>
  )
}


export default AboutWhitSliderDetails;