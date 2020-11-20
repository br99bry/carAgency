import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/AboutProcess.scss';
import faros from '../assets/img/faros.jpg';

const AboutProcess = () => {
  return (
    <>
    <section className="AboutProcess">
      <div className="AboutProcess__details">
        <h2> ¿Para qué sirve? </h2>
        <p> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quae nesciunt dolorem ad explicabo exercitationem id quam ea nulla adipisci eaque minus error eum illo. Soluta quam ea repudiandae illo! 
        </p>
      </div>
      <div className="AbourProcess__video">
        <iframe src="https://www.youtube.com/embed/x6_cwK8F7aQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="AboutProcess__process">
        <h2> ¿Cómo lo hacemos? </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla aspernatur similique natus quod, qui possimus, consectetur a architecto laborum debitis assumenda? Sunt eius doloremque vero quia sint? Maiores, repudiandae. </p>
      </div>
      <div className="AboutProcess__img">
        <img src={faros} alt=""/>
        <img src={faros} alt=""/>
      </div>
      <div className="AboutProcess__plusInformation">
        <div className="AboutProcess__plusInformation-quiz1">
          <h2> ¿Qué colores manejan? </h2>
          <p> azul, humo y humo obscuro </p>
          <div className="AboutProcess__plusInformation-quiz1-colors" >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="AboutProcess__plusInformation-quiz2">
          <h2> ¿Qué durabilidad tiene? </h2>
          <p> 4 a 6 años dependiendo de la exposicion al sol </p>
        </div>
      </div>
    </section>
    </>
  )
}

const mapStateToProps = state => {
  return {

  }
}
export default connect( mapStateToProps, null )(AboutProcess);