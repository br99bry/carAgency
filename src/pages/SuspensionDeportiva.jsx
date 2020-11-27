import React from 'react'
import {connect} from 'react-redux';

import './styles/SuspensionDeportiva.scss';
import Footer from '../components/Footer';

import HeroOneCar from '../components/HeroOneCar';
import AboutWhitSliderDetails from '../components/AboutWhitSliderDetails';
import AboutProcess from '../components/AboutProcess';
import Table from '../components/Table';
import Colash from '../components/Colash';


const SuspensionDeportiva = ({hero,aboutSlider,aboutProcess,colash,table}) => {
  return (
    <>
      <div className="SuspensionDeportiva">
        <HeroOneCar data={hero} />
        <AboutWhitSliderDetails data={aboutSlider} />
        <AboutProcess data={aboutProcess} isVisibleAboutProcessPlusInformationIsActive='none' />
        <Table data={table} />
        <Colash data={colash} />
        <Footer />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    hero: state.services.suspensionDeportiva.hero,
    aboutSlider: state.services.suspensionDeportiva.aboutSlider,
    aboutProcess: state.services.suspensionDeportiva.aboutProcess,
    table: state.services.suspensionDeportiva.table,
    colash: state.services.suspensionDeportiva.colash
  }
}

export default connect(mapStateToProps,null)(SuspensionDeportiva);