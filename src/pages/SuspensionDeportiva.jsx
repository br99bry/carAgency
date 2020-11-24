import React from 'react'
import {connect} from 'react-redux';

import './styles/SuspensionDeportiva.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const SuspensionDeportiva = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="SuspensionDeportiva">
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
    hero: state.services.suspensionDeportiva.hero,
    aboutSlider: state.services.suspensionDeportiva.aboutSlider,
    aboutProcess: state.services.suspensionDeportiva.aboutProcess,
    colash: state.services.suspensionDeportiva.colash
  }
}

export default connect(mapStateToProps,null)(SuspensionDeportiva);