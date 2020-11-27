import React from 'react'
import {connect} from 'react-redux';

import './styles/SistemasEscape.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Table from '../components/Table';
import Colash from '../components/Colash';


const SistemasEscape = ({hero,aboutSlider,aboutProcess,colash,table}) => {
  return (
    <>
      <div className="SistemasEscape">
        <HeroOneCar data={hero} />
        <AboutWhitSliderDetails data={aboutSlider} />
        <AboutProcess data={aboutProcess} isVisibleAboutProcessPlusInformationIsActive='none' />
        <Table data={table} />
        <Colash data={colash} />
      </div>
      <Footer /> 
    </>
  )
}

const mapStateToProps = state => {
  return {
    hero: state.services.sistemasEscape.hero,
    aboutSlider: state.services.sistemasEscape.aboutSlider,
    aboutProcess: state.services.sistemasEscape.aboutProcess,
    table: state.services.sistemasEscape.table,
    colash: state.services.sistemasEscape.colash
  }
}

export default connect(mapStateToProps,null)(SistemasEscape);