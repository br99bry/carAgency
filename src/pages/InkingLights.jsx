import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/InkingLights.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';

const InkingLights = () => {
  return (
    <>
      <div className="InkingLights">
        <HeroOneCar />
        <AboutWhitSliderDetails />
        <AboutProcess />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect( mapStateToProps , null )(InkingLights);