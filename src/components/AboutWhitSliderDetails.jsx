import React, { useState, useRef } from 'react';

import './styles/AboutWhitSliderDetails.scss';

const AboutWhitSliderDetails = ( {data} ) => {
  
  // const [dotActive , setDotActive] = useState(0)
  const AboutWhitSliderDetailsRef = useRef();
  const carrusel = useRef();
  const handleImage = (e) => {
    // console.log(AboutWhitSliderDetailsRef.current.children)
    let whoIs = e.target.id
    whoIs = whoIs.charAt(26)-1
    // console.log('click a '+whoIs)
    let content = AboutWhitSliderDetailsRef.current.children.length;
    let elemento = AboutWhitSliderDetailsRef.current
    for(let i = 0; i<content; i++){
      // console.log(AboutWhitSliderDetailsRef.current.children[i])
      elemento.children[i].style.backgroundColor='white'
    }
    elemento.children[whoIs].style.backgroundColor='rgb(156, 156, 156)'
    setImage(whoIs)
  }
  
  const setImage= (whoIs) => {
    // console.log(carrusel)
    // console.log('el paso es de '+carrusel.current.offsetWidth)
    // console.log('dot es '+whoIs)
    carrusel.current.scrollLeft = whoIs*carrusel.current.offsetWidth;
    // console.log('el scroll queda en '+carrusel.current.scrollLeft)
    // setDotActive(whoIs)
  }

  return (
    <>
    <section className="AboutWhitSliderDetails">
      <div className="AboutWhitSliderDetails__detailsDescription">
        <h2> {data.title} </h2>
        <p> {data.details} </p>
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