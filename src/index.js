import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App.jsx';

import logoHome from './assets/img/fondoHome.png';
import carHome1 from './assets/img/carHome1.jpg';
import carHome2 from './assets/img/carHome2.jpg';
import carHome3 from './assets/img/carHome3.jpg';
import carInterior2 from './assets/img/carInterior2.jpg';
import carInterior1 from './assets/img/carInterior1.JPG';
import carInterior3 from './assets/img/carInterior3.jpg';

const initialState = {
  navbar: {
    links: ['Inicio','Nosotros','Servicios','Contacto','Escribenos'],
  },
  home: {
    homeDarkLogo: logoHome,
    homeDarkTitle: [ 'H & PERFORMANCE', 'SMART WORKSHOP' ],
    homeDarkOptions: [ 'Contacto' , 'Servicios' ],
    carrousel:{
      img: [
        {id: 1, src: carHome1},
        {id: 2, src: carHome2},
        {id: 3, src: carHome3},
      ],
    },
    carrouselOfInterior: {
      img: [
        { id: 1, src: carInterior1 },
        { id: 2, src: carInterior2 },
        { id: 3, src: carInterior3 },
      ]
    }
  }

}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


