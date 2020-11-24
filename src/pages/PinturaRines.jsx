import React from 'react'
import {connect} from 'react-redux';

import './styles/PinturaRines.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const PinturaRines = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="PinturaRines">
        <HeroOneCar data={hero} />
        <AboutWhitSliderDetails data={aboutSlider} />
        <AboutProcess data={aboutProcess} isVisibleAboutProcessPlusInformationIsActive='none' />
        <Colash data={colash} />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    hero: state.services.pinturaRines.hero,
    aboutSlider: state.services.pinturaRines.aboutSlider,
    aboutProcess: state.services.pinturaRines.aboutProcess,
    colash: state.services.pinturaRines.colash
  }
}

export default connect(mapStateToProps,null)(PinturaRines);