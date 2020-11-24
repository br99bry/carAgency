import React from 'react'
import {connect} from 'react-redux';

import './styles/SistemasEscape.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const SistemasEscape = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="SistemasEscape">
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
    hero: state.services.sistemasEscape.hero,
    aboutSlider: state.services.sistemasEscape.aboutSlider,
    aboutProcess: state.services.sistemasEscape.aboutProcess,
    colash: state.services.sistemasEscape.colash
  }
}

export default connect(mapStateToProps,null)(SistemasEscape);