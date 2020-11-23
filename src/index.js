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
import bgHeroInkingLights from './assets/img/faros.jpg';
import aerodinamica from './assets/img/aerodinamica.jpg';


const initialState = {
  navbar: {
    links: ['Inicio','Nosotros','Servicios','Contacto','Escribenos'],
    servicios: ['Entintado de faros'],
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
    aerodinamica:{
      hero: {
        logo: logoHome,
        hero: 'AERODINAMICA Y ACCESORIOS',
        bg: aerodinamica
      },
      aboutSlider:{
        title: '¿COMO FUNCIONA LA AERODINAMICA EN UN CARRO?',
        details: 'El efecto del aire sobre un coche no es únicamente de oposición al avance. ... Otra forma de atenuar esta fuerza de sustentación es pegar el coche al suelo lo máximo posible, para que la lámina de aire que circula por debajo sea mínima',
        imgs: [ 
          { id: 1, img: aerodinamica }, 
          { id: 2, img: aerodinamica }, 
          { id: 3, img: aerodinamica }, 
        ]
      },
      aboutProcess: {
        title1: 'VENTAJAS DE LA AERODINAMICA DEL AUTO',
        details1: 'Habitualmente se utiliza como superficie de referencia el área frontal del vehículo, obteniéndose a partir de dos partes: por un lado, el conjunto del parabrisas, el cofre y los espejos laterales, y por otro, la parte baja del frente del vehículo, es decir, de la fascia. Las formas suaves de las defensas, retrovisores, faros, etc, mejoran la aerodinámica, esto al no ocupar mucho espacio. Aunque un final del techo o del maletero en esquina y dirigido hacia abajo, como por ejemplo los monovolúmenes, es mejor que un final de techo o maletero redondeado como el de los sedanes',
        title2: 'FUNCION DE ALERONES O SPOILERS EN  TU VEHICULO',
        details2: [ 'los alerones tienen un propósito específico: generar fuerza contra el piso (downforce) gracias al paso del aire. Al hacer que el auto genere una mayor fuerza contra el piso, tendrá mejor agarre, por lo que podrá ir más rápido sin perder estabilidad, sobre todo en las curvas.', '¿Que accesorios ofrecemos para mejorar tu aerodinámica?', 'Contamos con lips, alerones ,parrillas ,estribos ,carcasas de fibra de carbono y muchos accesorios mas','MANEJAMOS UN AMPLIO SURTIDO EN MODIFICACIONES ESTETICAS PARA TU VEHICULO BUSCANDO ASI SIEMPRE OFRECERTE LOS MEJORES ACCESORIOS DEL MERCADO' ],
        imgs: [ 
          { id: 1, img: aerodinamica },
          { id: 2, img: aerodinamica },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: aerodinamica },
        { id: 2, img: aerodinamica },
        { id: 3, img: aerodinamica },
        { id: 4, img: aerodinamica },
        { id: 5, img: aerodinamica },
        { id: 6, img: aerodinamica },
        { id: 7, img: aerodinamica },
        { id: 8, img: aerodinamica },
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


