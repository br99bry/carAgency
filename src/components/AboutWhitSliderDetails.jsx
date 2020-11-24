import React, { useRef } from 'react';

import './styles/AboutWhitSliderDetails.scss';

const AboutWhitSliderDetails = ( {data} ) => {
  
  const AboutWhitSliderDetailsRef = useRef();
  const carrusel = useRef();
  const handleImage = (e) => {
    let whoIs = e.target.id
    whoIs = whoIs.charAt(26)-1
    let content = AboutWhitSliderDetailsRef.current.children.length;
    let elemento = AboutWhitSliderDetailsRef.current
    for(let i = 0; i<content; i++){
      elemento.children[i].style.backgroundColor='white'
    }
    elemento.children[whoIs].style.backgroundColor='rgb(156, 156, 156)'
    setImage(whoIs)
  }
  
  const setImage= (whoIs) => {
    carrusel.current.scrollLeft = whoIs*carrusel.current.offsetWidth;
  }

  return (
    <>
    <section className="AboutWhitSliderDetails">
      <div className="AboutWhitSliderDetails__detailsDescription">
        <h2> {data.title.toUpperCase()} </h2>
        <p> {data.details.charAt(0).toUpperCase()}{data.details.slice(1).toLowerCase()} </p>
        <div ref={AboutWhitSliderDetailsRef} className="AboutWhitSliderDetails__detailsDescription-dots">
          { data.imgs.map( images => (
            <div 
            key={images.id} 
            id={`AboutWhitSliderDetails-dot${images.id}`}
            onClick={ (e) => ( handleImage(e) ) }
            ></div>
          ) ) }
        </div>
      </div>
      <div ref={carrusel} className="AboutWhitSliderDetails__img">
        { data.imgs.map( images => (
          <img key={images.id} src={images.img} alt="slider"/>
        ) ) }
      </div>
    </section>
    </>
  )
}


export default AboutWhitSliderDetails;