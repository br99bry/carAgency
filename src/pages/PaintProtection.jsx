import React from 'react'
import {connect} from 'react-redux';

import './styles/PaintProtection.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const PaintProtection = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="PaintProtection">
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
    hero: state.services.paintProtection.hero,
    aboutSlider: state.services.paintProtection.aboutSlider,
    aboutProcess: state.services.paintProtection.aboutProcess,
    colash: state.services.paintProtection.colash
  }
}

export default connect(mapStateToProps,null)(PaintProtection);