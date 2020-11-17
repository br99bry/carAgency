import React from 'react';
import { connect } from 'react-redux';
import './styles/CarrouselHome.scss';
import carHome1 from '../assets/img/carHome1.jpg';


const CarrouselHome = ( {videoExists, videos, images} ) => {
  return (
    <div id='1' className="CarrouselHome">
      {/* <img src={carHome1} alt=""/> */}
      {
        videoExists?
        videos.map(video => (
          <video controls src={video} poster={carHome1}></video>
        ))
        :
        null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    videoExists: state.home.carrousel.video,
    videos: state.home.carrousel.videos,
    images: state.home.carrousel.img,
  }
}

export default connect(mapStateToProps,null)(CarrouselHome);