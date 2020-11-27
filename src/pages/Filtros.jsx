import React from 'react'
import {connect} from 'react-redux';

import './styles/Filtros.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const Filtros = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="Filtros">
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
    hero: state.services.filtros.hero,
    aboutSlider: state.services.filtros.aboutSlider,
    aboutProcess: state.services.filtros.aboutProcess,
    colash: state.services.filtros.colash
  }
}

export default connect(mapStateToProps,null)(Filtros);