import React from 'react'
import {connect} from 'react-redux';

import './styles/Hydrografia.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const Hydrografia = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="Hydrografia">
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
    hero: state.services.hydrografia.hero,
    aboutSlider: state.services.hydrografia.aboutSlider,
    aboutProcess: state.services.hydrografia.aboutProcess,
    colash: state.services.hydrografia.colash
  }
}

export default connect(mapStateToProps,null)(Hydrografia);