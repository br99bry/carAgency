import React from 'react'
import {connect} from 'react-redux';

import './styles/ValvulasAlivio.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Table from '../components/Table';
import Colash from '../components/Colash';


const ValvulasAlivio = ({hero,aboutSlider,aboutProcess,colash,table}) => {
  return (
    <>
      <div className="ValvulasAlivio">
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
    hero: state.services.valvulasAlivio.hero,
    aboutSlider: state.services.valvulasAlivio.aboutSlider,
    aboutProcess: state.services.valvulasAlivio.aboutProcess,
    table: state.services.valvulasAlivio.table,
    colash: state.services.valvulasAlivio.colash
  }
}

export default connect(mapStateToProps,null)(ValvulasAlivio);