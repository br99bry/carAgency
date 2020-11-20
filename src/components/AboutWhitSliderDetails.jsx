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

      </div>
      <div className="AboutWhitSliderDetails__img">
        <img src={faros} alt=""/>
        dwfee
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