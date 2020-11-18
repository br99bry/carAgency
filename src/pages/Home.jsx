import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './styles/Home.scss';

import CarrouselHome from '../components/CarruselHome';

const Home = ( {home, images} ) => {

  const carrusel = useRef();

  const movRight = (e) => {
    let validar = carrusel.current.scrollLeft + carrusel.current.offsetWidth + 10 ;
    if(validar  < carrusel.current.scrollWidth){
      carrusel.current.scrollLeft += carrusel.current.offsetWidth;
      console.log(validar)
    }else{
      carrusel.current.scrollLeft = 0;
    }
  }

  const movLeft = (e) => {
    let validar = carrusel.current.scrollLeft - carrusel.current.offsetWidth ;
    if(validar  > 0){
      carrusel.current.scrollLeft -= carrusel.current.offsetWidth;
    }else{
      carrusel.current.scrollLeft = (carrusel.current.scrollWidth-carrusel.current.offsetWidth)
    }
  }

  return(
    <>
      <section className="Home">
        <div className="Home__dark">
          <div className="Home__dark-logo">
            <img src={home.homeDarkLogo} alt="logo"/>
          </div>
          <div className="Home__dark-details">
            <h1> {home.homeDarkTitle[0]} <br/> {home.homeDarkTitle[1]} </h1>
            <div className="Home__dark-details-options">
              <div> {home.homeDarkOptions[0]} </div>
              <div> {home.homeDarkOptions[1]} </div>
            </div>
          </div>
        </div>
        <div className="Home__hero">
          <div className="Home__hero-carrousel" ref={carrusel} >
            <CarrouselHome 
            movR={movRight}
            movL={movLeft}
            />
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    home: state.home,
    images: state.home.carrousel.img,
  }
}

export default connect(mapStateToProps, null)(Home);