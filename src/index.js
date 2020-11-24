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
import filtros from './assets/img/filtros.jpg';
import hidrografia from './assets/img/hidrografia.jpg';
import paintProtection from './assets/img/paintProtection.jpg';




const initialState = {
  navbar: {
    links: ['Inicio','Nosotros','Servicios','Contacto','Escribenos'],
    servicios: ['Entintado de faros', 'Aerodinamica y Accesorios', 'Filtros', 'Hydrografia', 'Paint Protection'],
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
        video: 'https://www.youtube.com/embed/Zw1rVVgOXnU',
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
        video: 'https://www.youtube.com/embed/21wVZpgtDqg',
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
    filtros:{
      hero: {
        logo: logoHome,
        hero: 'FILTROS',
        bg: filtros
      },
      aboutSlider:{
        title: '¿Qué es?',
        details: 'El filtro de alto flujo o de alto rendimiento para un vehículo, es un aditamento que está hecho de mejores materiales, implementado elementos como algodón, mallas y una combinación de aceite con algodón, logrando un mayor bloqueo en la entrada de polvo, permitiendo un flujo de aire más completo y limpio obteniendo un envío de alto flujo de aire, restringiendo la anticontaminación del motor.',
        imgs: [ 
          { id: 1, img: filtros }, 
          { id: 2, img: filtros }, 
          { id: 3, img: filtros }, 
        ]
      },
      aboutProcess: {
        title1: '¿Para qué sirve?',
        details1: 'La funcionalidad principal del filtro de alto flujo es la de obtener un mejor flujo de aire para el motor, ya que gracias a eso podremos obtener un mejor desempeño para el motor, ya sea en las sensaciones de manejo, más rendimiento del combustible y un incremento en la potencia del motor.',
        title2: 'Que contiene',
        details2: [ 'Kits de Inducción K&N de Alto Rendimiento',
         '•	Kits de admisión de 57i, Kits de rendimiento de inyección de combustible: kits FIPK, Typhoon y AirCharger',
         '•	Reemplaza el filtro de aire y el sistema de admisión restrictivos de fábrica',
        '•	Lo último en el diseño de alto rendimiento de K&N',
        '•	Diseñado para aumentar los caballos de potencia y la aceleración hasta en un 10%',
        '•	Funciona con los sistemas originales de la computadora del equipo y de control de emisiones',
        'Tiempo de vida',
        'El fabricante estima una duración del filtro de 10 años o 1,600,000 km, tomando en cuenta el buen uso y mantenimiento adecuado.',
        'Garantía',
        'Garantía limitada de un año con el fabricante. Aplican Restricciones, ver manual de fabricante.',

        ],
        video: 'https://www.youtube.com/embed/21wVZpgtDqg',
        imgs: [ 
          { id: 1, img: filtros },
          { id: 2, img: filtros },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: filtros },
        { id: 2, img: filtros },
        { id: 3, img: filtros },
        { id: 4, img: filtros },
        { id: 5, img: filtros },
        { id: 6, img: filtros },
        { id: 7, img: filtros },
        { id: 8, img: filtros },
      ]
    },
    hydrografia:{
      hero: {
        logo: logoHome,
        hero: 'HIDROGRAFÍA ',
        bg: hidrografia
      },
      aboutSlider:{
        title: '¿QUE ES LA IMPRESION HIDROGRAFICA  O HIDROGRAFIA?',
        details: 'Water Transfer Printing, impresión hidrográfica o hidroimpresión consiste en un proceso de decoración aplicable a cualquier tipo de material, sin importar la complejidad de su forma. ... Previamente, la pieza a decorar debe haber sido tratada con un lavado, lijado, imprimación y capa base para mejorar su adherencia ',
        imgs: [ 
          { id: 1, img: hidrografia }, 
          { id: 2, img: hidrografia }, 
          { id: 3, img: hidrografia }, 
        ]
      },
      aboutProcess: {
        title1: '¿ES REMOVIBLE LA IMPRESIÓN HIDROGRAFICA?',
        details1: 'NO, NO ES REMOVIBLE UNA VEZ APLICADO LA IMPRESIÓN LA UNICA FORMA DE REGRESAR AL COLOR ANTERIOR ES VOLVIENDO A PINTAR ',
        title2: '¿QUE DURABILIDAD TIENE?',
        details2: [ 'La durabilidad es la misma que una  pintura automotriz ya que se protege con transparente que tiene una durabilidad de 5 años ',
        '¿A QUE PIEZAS PUEDO APLICAR LA HIDROGRAFIA?',
        'BASICAMENTE ES APLICABLE A TODO TIPO DE MATERIAL LLAMESE PLASTICO,RESINA,FIBRA DE VIDRIO,MADERA,ETC. Automotriz  alerones, rines, difusores, lips, interiores, carcasas de espejos,',
        '¿CUANTO TIEMPO TARDA EN APLICARSE LA HIDROGRAFIA?',
        'ESTO DEPENDERA DE LA CANTIDAD Y FORMA DE LAS PIEZAS A REALIZAR LA IMPRESIÓN NUESTRO ESTIMADO VA DESDE 1 HASTA 4 DIAS'
        
        ],
        video: 'https://www.youtube.com/embed/21wVZpgtDqg',
        imgs: [ 
          { id: 1, img: hidrografia },
          { id: 2, img: hidrografia },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: hidrografia },
        { id: 2, img: hidrografia },
        { id: 3, img: hidrografia },
        { id: 4, img: hidrografia },
        { id: 5, img: hidrografia },
        { id: 6, img: hidrografia },
        { id: 7, img: hidrografia },
        { id: 8, img: hidrografia },
      ]
    },
    paintProtection:{
      hero: {
        logo: logoHome,
        hero: 'PAINT PROTECTION FILM (PPF)',
        bg: paintProtection
      },
      aboutSlider:{
        title: '¿QUE ES PPF O PAINT PROTECTION FILM?',
        details: 'El Paint Protection Film (PPF) es un film o película ultra transparente termoplástica de poliuretano que se aplica sobre la laca, barniz o pintura del vehículo, aislándolo de posibles abrasiones exteriores como por ejemplo: chinazos , arañazos, golpes, excrementos de pájaro, restos de insectos, marcas de lavado y otros elementos ambientales.',
        imgs: [ 
          { id: 1, img: paintProtection }, 
          { id: 2, img: paintProtection }, 
          { id: 3, img: paintProtection }, 
        ]
      },
      aboutProcess: {
        title1: '¿POR QUÉ DEBERÍA PONER PAINT PROTECTION FILM EN MI COCHE?',
        details1: 'Paint Protection Film es una solución integral que actúa como una barrera invisible, preservando la pintura original para que quede intacta con el paso del tiempo.El Paint Protection Film es una inversión que ayuda a conservar el valor de reventa de tu coche al proteger su pintura original y  al mantener el exterior del vehículo como nuevo durante un período de tiempo',
        title2: '¿DÓNDE PUEDO INSTALAR PAINT PROTECTION FILM?',
        details2: [ 'El PPF se puede instalar en cualquier área que esté expuesta a daños frecuentes y potenciales.',
        '¿DURABILIDAD?',
        'Dependiendo la calidad del vinil podríamos hablar desde 3 hasta 10 años',
        ],
        video: 'https://www.youtube.com/embed/21wVZpgtDqg',
        imgs: [ 
          { id: 1, img: paintProtection },
          { id: 2, img: paintProtection },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: paintProtection },
        { id: 2, img: paintProtection },
        { id: 3, img: paintProtection },
        { id: 4, img: paintProtection },
        { id: 5, img: paintProtection },
        { id: 6, img: paintProtection },
        { id: 7, img: paintProtection },
        { id: 8, img: paintProtection },
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


