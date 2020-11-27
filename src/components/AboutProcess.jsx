import React from 'react';

import './styles/AboutProcess.scss';

const AboutProcess = ( {data , isVisibleAboutProcessPlusInformationIsActive} ) => {

  const  AboutProcessPlusInformationIsActive = {
    display: `${isVisibleAboutProcessPlusInformationIsActive}` ,
  }

  return (
    <>
    <section className="AboutProcess">
      <div className="AboutProcess__details">
        <h2> {data.title1.toUpperCase()} </h2>
        {data.details1.map( info => (
          <p> 
          {info.charAt(0).toUpperCase()}{info.slice(1).toLowerCase()}
          </p>
        ))}
      </div>
      <div className="AbourProcess__video">
        {
          data.video.map(videos => (
            <iframe src={videos} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))
        }
      </div>
      <div className="AboutProcess__process">
        {data.theory.map(theory => {
          return (
            <>
            <h2> {theory.title.toUpperCase()} </h2>
              {theory.description.map( texto => (
                <>
                <p key={theory.id} > 
                  {texto.charAt(0).toUpperCase()}
                  {texto.slice(1).toLowerCase()}
                </p>
                </>
              ) )  }
            </>
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
      { data.titleColaborate ? 
        <div className="AboutProcess__Colaborate">
          <h1> {data.titleColaborate} </h1>
          <p> {data.detailColaborate}  </p>
        </div>
        :
        null
      }
    </section>
    </>
  )
}

export default AboutProcess;