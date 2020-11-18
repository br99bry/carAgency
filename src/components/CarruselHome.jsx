import React from 'react';
import { connect } from 'react-redux';
import './styles/CarrouselHome.scss';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CarrouselHome = ( {images, movR, movL} ) => {
  
  return (
    <div className="CarrouselHome">
      {
        images.map(img => (
          <img className="CarrouselHome__bg" key={img.id} src={img.src} alt="img home"/>
        ))
      }
      <div className="CarrouselHome__arrow">
        <span onClick={ (e) => (movL(e)) }  >
        <FaArrowLeft/>
        </span>
        <span onClick={ (e) => (movR(e)) }>
        <FaArrowRight  />
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.home.carrousel.img,
  }
}

export default connect(mapStateToProps,null)(CarrouselHome);