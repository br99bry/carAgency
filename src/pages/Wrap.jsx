import React from 'react'
import {connect} from 'react-redux';

import './styles/Wrap.scss';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Colash from '../components/Colash';


const Wrap = ({hero,aboutSlider,aboutProcess,colash}) => {
  return (
    <>
      <div className="Wrap">
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
    hero: state.services.wrap.hero,
    aboutSlider: state.services.wrap.aboutSlider,
    aboutProcess: state.services.wrap.aboutProcess,
    colash: state.services.wrap.colash
  }
}

export default connect(mapStateToProps,null)(Wrap);