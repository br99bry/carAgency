import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/HeroOneCar.scss';
import faros from '../assets/img/faros.jpg';
import fondoHome from '../assets/img/fondoHome.png';

const HeroOneCar = () => {
  return (
    <main className="HeroOneCar">
      <img src={faros} alt="imagen principal" className="HeroOneCar__img"/>
      <img src={fondoHome} alt="" className="HeroOneCar__logo"/>
      <h2 className="HeroOneCar__title" >
        ENTINTADO DE FAROS
      </h2>
    </main>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect( mapStateToProps , null )(HeroOneCar);