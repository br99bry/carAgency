import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/AboutProcess.scss';

const AboutProcess = ( {data} ) => {
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
        <iframe src="https://www.youtube.com/embed/x6_cwK8F7aQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="AboutProcess__process">
        <h2> {data.title2} </h2>
        <p> 
        {data.details2}
        </p>
      </div>
      <div className="AboutProcess__img">
        <img src={data.imgs[0].img} alt=""/>
        <img src={data.imgs[1].img} alt=""/>
      </div>
      <div className="AboutProcess__plusInformation">
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