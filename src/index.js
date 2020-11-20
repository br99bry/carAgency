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
import bgHeroInkingLights from './assets/img/faros.jpg';


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
  },
  services: {
    InkingLights:{
      hero: {
        logo: logoHome,
        hero: 'ENTINTADO DE FAROS',
        bg: bgHeroInkingLights
      },
      aboutSlider:{
        title: '¿Qué es?',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vel, suscipit magnam quidem ad at perspiciatis id, delectus porro veritatis neque velit accusantium odit voluptatibus quam corrupti illo molestiae nostrum!',
        imgs: [ 
          { id: 1, img: bgHeroInkingLights }, 
          { id: 2, img: bgHeroInkingLights }, 
          { id: 3, img: bgHeroInkingLights }, 
        ]
      },
      aboutProcess: {
        title1: '¿PARA QUE SIRVE EL ENTINTADO DE FAROS?',
        details1: 'La mayoría de nosotros sabemos que las luces de los autos tienden a desgastarse, ponerse amarillas o ponerse feas. Es causada principalmente por el polvo y los rayos UV del sol. El teñir sus luces con una película protectora puede evitar este daño y mantenerlas bonitas al mismo tiempo preservando la visibilidad original',
        title2: '¿Cómo lo hacemos?',
        details2: [ 'UTILIZAMOS UN VINIL FABRICADO ESPECIALMENTE PARA DARLE UN ENTINTADO A TUS FAROS O CALAVERAS EL CUAL NO DAÑA NI DEJA RESIDUO DE PEGAMENTO', 'QUE MARCA UTILIZAMOS PARA ENTINTAR LOS FAROS?', 'Los tintes VViViD están hechos de un material más grueso y resistente, capaz de soportar astillas de roca, el calor de los faros y otros desgastes.' ],
        imgs: [ 
          { id: 1, img: bgHeroInkingLights },
          { id: 2, img: bgHeroInkingLights },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: bgHeroInkingLights },
        { id: 2, img: bgHeroInkingLights },
        { id: 3, img: bgHeroInkingLights },
        { id: 4, img: bgHeroInkingLights },
        { id: 5, img: bgHeroInkingLights },
        { id: 6, img: bgHeroInkingLights },
        { id: 7, img: bgHeroInkingLights },
        { id: 8, img: bgHeroInkingLights },
      ]
    },

  }

}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


