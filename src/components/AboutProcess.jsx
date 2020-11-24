import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AboutProcess.scss';

const AboutProcess = ( {data , isVisibleAboutProcessPlusInformationIsActive} ) => {

  const  AboutProcessPlusInformationIsActive = {
    display: `${isVisibleAboutProcessPlusInformationIsActive}` ,
  }

  return (
    <>
    <section className="AboutProcess">
      <div className="AboutProcess__details">
        <h2> {data.title1} </h2>
        <p> 
        {data.details1}
        </p>
      </div>
      <div className="AbourProcess__video">
        {
          data.video.map(videos => (
            <iframe src={videos} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))
        }
      </div>
      <div className="AboutProcess__process">
        <h2> {data.title2} </h2>
        {data.details2.map(details => {
          return (
            <p> 
              {details}
            </p>
          )
        })}
      </div>
      <div className="AboutProcess__img">
        <img src={data.imgs[0].img} alt=""/>
        <img src={data.imgs[1].img} alt=""/>
      </div>
      <div style={AboutProcessPlusInformationIsActive} className="AboutProcess__plusInformation">
        <div className="AboutProcess__plusInformation-quiz1">
          <h2> {data.title3} </h2>
          <p> {data.details3} </p>
          <div className="AboutProcess__plusInformation-quiz1-colors" >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="AboutProcess__plusInformation-quiz2">
          <h2> {data.title4} </h2>
          <p> {data.details4} </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutProcess;