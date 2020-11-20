import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/InkingLights.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';

const InkingLights = ( {hero,aboutSlider,aboutProcess,colash} ) => {
  return (
    <>
      <div className="InkingLights">
        <HeroOneCar data={hero} />
        <AboutWhitSliderDetails data={aboutSlider} />
        <AboutProcess data={aboutProcess} />
        <Colash data={colash} />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    hero: state.services.InkingLights.hero,
    aboutSlider: state.services.InkingLights.aboutSlider,
    aboutProcess:  state.services.InkingLights.aboutProcess,
    colash: state.services.InkingLights.colash
  }
}

export default connect( mapStateToProps , null )(InkingLights);