import React from 'react';
import './styles/Home.scss';

import carHome1 from '../assets/img/carHome1.jpg';

const Home = () => {
  return(
    <>
      <section className="Home">
        <div className="Home__dark">
        </div>
        <div className="Home__hero">
          <div className="Home__hero-logo">
            <img src={carHome1} alt="logo"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;