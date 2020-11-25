import React from 'react';

import './styles/HeroOneCar.scss';


const HeroOneCar = ( {data} ) => {
  return (
    <main id="servicesInicio" className="HeroOneCar">
      <img src={data.bg} alt="imagen principal" className="HeroOneCar__img"/>
      <img src={data.logo} alt="" className="HeroOneCar__logo"/>
      <h2 className="HeroOneCar__title" >
        {data.hero}
      </h2>
    </main>
  );
}


export default HeroOneCar;