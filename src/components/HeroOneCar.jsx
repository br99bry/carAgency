import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HeroOneCar.scss';
import faros from '../assets/img/faros.jpg';
import fondoHome from '../assets/img/fondoHome.png';

const HeroOneCar = ( {data} ) => {
  return (
    <main className="HeroOneCar">
      <img src={data.bg} alt="imagen principal" className="HeroOneCar__img"/>
      <img src={data.logo} alt="" className="HeroOneCar__logo"/>
      <h2 className="HeroOneCar__title" >
        {data.hero}
      </h2>
    </main>
  );
}


export default HeroOneCar;