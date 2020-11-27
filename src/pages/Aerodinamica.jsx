import React from 'react';
import { connect } from 'react-redux';

import './styles/Aerodinamica.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';

const Aerodinamica = ( {hero,aboutSlider,aboutProcess,colash} ) => {
  return (
    <>
      <div className="Aerodinamica">
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
    hero: state.services.aerodinamica.hero,
    aboutSlider: state.services.aerodinamica.aboutSlider,
    aboutProcess: state.services.aerodinamica.aboutProcess,
    colash: state.services.aerodinamica.colash
  }
}

export default connect(mapStateToProps,null)(Aerodinamica);