import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

import CarrouselHome from '../components/CarruselHome';
import rightArrow from '../assets/img/right-arrow.png';

const Home = ( {home, imagesInterior} ) => {

  const carrusel = useRef();
  const carruselInterior = useRef();

  const movRightInterior = (e) => {
    console.log(carruselInterior);
    let validar = carruselInterior.current.scrollLeft + carruselInterior.current.offsetWidth + 10 ;
    if(validar  < carruselInterior.current.scrollWidth){
      carruselInterior.current.scrollLeft += carruselInterior.current.offsetWidth;
    }else{
      carruselInterior.current.scrollLeft = 0;
    }
  }

  const movRight = (e) => {
    let validar = carrusel.current.scrollLeft + carrusel.current.offsetWidth + 10 ;
    if(validar  < carrusel.current.scrollWidth){
      carrusel.current.scrollLeft += carrusel.current.offsetWidth;
    }else{
      carrusel.current.scrollLeft = 0;
    }
  }

  const movLeft = (e) => {
    let validar = carrusel.current.scrollLeft - carrusel.current.offsetWidth ;
    if(validar  >= 0){
      carrusel.current.scrollLeft -= carrusel.current.offsetWidth;
    }else{
      carrusel.current.scrollLeft = (carrusel.current.scrollWidth-carrusel.current.offsetWidth)
    }
  }

  return(
    <>
      <section className="Home">
        <div className="Home__interior">
          <div className="Home__interior-img" ref={carruselInterior} >
            {
            imagesInterior.map(img => (
            <img key={img.id} src={img.src} alt="img interior"/>
            ))
            }
          </div>
          <div className="Home__interior-row">
            <span onClick={ (e) => (movRightInterior(e)) }>
              <img alt="flecha derecha" src={rightArrow} />
            </span>
          </div>
        </div>
        <div className="Home__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non temporibus inventore ducimus cumque, similique molestias deleniti nobis, iure earum sunt! Nam aut sed consequuntur fuga, esse ut nulla! Dolore.
          </p>
        </div>
        <div className="Home__dark">
          <div className="Home__dark-logo">
            <img src={home.homeDarkLogo} alt="logo"/>
          </div>
          <div className="Home__dark-details">
            <h1> {home.homeDarkTitle[0]} <br/> {home.homeDarkTitle[1]} </h1>
            <div className="Home__dark-details-options">
              <div>
                <Link to='/'>
                  {home.homeDarkOptions[0]} 
                </Link> 
              </div>
              <div id="button-2"> 
                <div id="slide"></div>
                <Link to='/'>
                  {home.homeDarkOptions[1]} 
                </Link> 
              </div>
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
    imagesInterior: state.home.carrouselOfInterior.img,
  }
}

export default connect(mapStateToProps, null)(Home);