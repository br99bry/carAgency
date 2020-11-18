import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import './styles/CarrouselHome.scss';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CarrouselHome = ( {images, movR, movL} ) => {

  const dotContainer = useRef();
  const [ dot, setDot ] = useState(0);
  
  const handleDotR = () => {
    const selectDot = dotContainer.current
    if(dot<2){
      selectDot.children[dot].style.backgroundColor='white';
      selectDot.children[dot].style.height='4px';
      selectDot.children[dot+1].style.backgroundColor='red';
      selectDot.children[dot+1].style.height='6px';
      setDot(dot+1);
    }else{
      selectDot.children[dot].style.backgroundColor='white';
      selectDot.children[dot].style.height='4px';
      selectDot.children[0].style.backgroundColor='red';
      selectDot.children[0].style.height='6px';
      setDot(0);
    }
  }

  const handleDotL = () => {
    const selectDot = dotContainer.current
    if(dot>0){
      selectDot.children[dot].style.backgroundColor='white';
      selectDot.children[dot].style.height='4px';
      selectDot.children[dot-1].style.backgroundColor='red';
      selectDot.children[dot-1].style.height='6px';
      setDot(dot-1);
    }else{
      selectDot.children[dot].style.backgroundColor='white';
      selectDot.children[dot].style.height='4px';
      selectDot.children[2].style.backgroundColor='red';
      selectDot.children[2].style.height='6px';
      setDot(0);
    }
  }

  return (
    <div className="CarrouselHome">
      {
        images.map(img => (
          <img className="CarrouselHome__bg" key={img.id} src={img.src} alt="img home"/>
        ))
      }
      <div className="CarrouselHome__arrow">
        <span onClick={ (e) => (movL(e)) }  >
        <FaArrowLeft onClick={ () => ( handleDotL() ) }/>
        </span>
        <span onClick={ (e) => (movR(e)) }>
        <FaArrowRight onClick={ () => ( handleDotR() ) } />
        </span>
      </div>
      <div className="CarrouselHome__dots" ref={dotContainer} >
        { 
          images.map( (img) => (
            <div
            key={img.id} >
            </div>
          ) )
        }
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