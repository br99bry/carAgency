import React from 'react'
import {connect} from 'react-redux';

import './styles/Detaling.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const Detaling = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="Detaling">
        <HeroOneCar data={hero} />
        <AboutWhitSliderDetails data={aboutSlider} />
        <AboutProcess data={aboutProcess} isVisibleAboutProcessPlusInformationIsActive='none' />
        <Colash data={colash} />
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = state => {
  return {
    hero: state.services.detaling.hero,
    aboutSlider: state.services.detaling.aboutSlider,
    aboutProcess: state.services.detaling.aboutProcess,
    colash: state.services.detaling.colash
  }
}

export default connect(mapStateToProps,null)(Detaling);