import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/AboutWhitSliderDetails.scss';
import faros from '../assets/img/faros.jpg';

const AboutWhitSliderDetails = () => {
  return (
    <>
    <section className="AboutWhitSliderDetails">
      <div className="AboutWhitSliderDetails__detailsDescription">
        <h2> ¿Qué es? </h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vel, suscipit magnam quidem ad at perspiciatis id, delectus porro veritatis neque velit accusantium odit voluptatibus quam corrupti illo molestiae nostrum! </p>
      </div>
      <div className="AboutWhitSliderDetails__img">
        <img src={faros} alt=""/>
      </div>
    </section>
    </>
  )
}

const mapStateToProps = state => {
  return {

  }
}
export default connect( mapStateToProps, null )(AboutWhitSliderDetails);