import React from 'react'
import {connect} from 'react-redux';

import './styles/ValvulasAlivio.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const ValvulasAlivio = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="ValvulasAlivio">
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
    hero: state.services.valvulasAlivio.hero,
    aboutSlider: state.services.valvulasAlivio.aboutSlider,
    aboutProcess: state.services.valvulasAlivio.aboutProcess,
    colash: state.services.valvulasAlivio.colash
  }
}

export default connect(mapStateToProps,null)(ValvulasAlivio);