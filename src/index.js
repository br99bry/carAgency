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
import aerodinamica from './assets/img/services/aerodinamicaYaccesorios/aerodinamicaHero.jpg';
import filtros from './assets/img/filtros.jpg';
import hidrografia from './assets/img/hidrografia.jpg';
import paintProtection from './assets/img/paintProtection.jpg';
import pinturaRines from './assets/img/pinturaRines.jpg';
import suspension from './assets/img/suspension.jpg';
import sistemaEscape from './assets/img/sistemaEscape.png';
import valvulas from './assets/img/valvulas.jpg';
import wrap from './assets/img/wrap.jpg';
// imagenes de contacto seccion
import contactHero from './assets/img/contactHero.JPG';

// imagenes del servicio de fatos
import farosHero from './assets/img/services/farosEntintados/farosHero.jpg';
import farosslider1 from './assets/img/services/farosEntintados/slider1.jpg';
import farosslider2 from './assets/img/services/farosEntintados/slider2.jpg';
import farosslider3 from './assets/img/services/farosEntintados/slider3.jpg';
import farosabout1 from './assets/img/services/farosEntintados/about1.jpg';
import farosabout2 from './assets/img/services/farosEntintados/about2.jpg';
import faroscolash1 from './assets/img/services/farosEntintados/colash1.jpg';
import faroscolash2 from './assets/img/services/farosEntintados/colash2.jpg';
import faroscolash3 from './assets/img/services/farosEntintados/colash3.jpg';
// imagenes del servicio de aerodinamica
import aerodinamicaColash1 from './assets/img/services/aerodinamicaYaccesorios/colash1.jpg';
import aerodinamicaColash2 from './assets/img/services/aerodinamicaYaccesorios/colash2.jpg';
import aerodinamicaColash3 from './assets/img/services/aerodinamicaYaccesorios/colash3.jpg';
import aerodinamicaColash4 from './assets/img/services/aerodinamicaYaccesorios/colash4.jpg';
import aerodinamicaColash5 from './assets/img/services/aerodinamicaYaccesorios/colash5.jpg';
import aerodinamicaColash6 from './assets/img/services/aerodinamicaYaccesorios/colash6.jpg';
import aerodinamicaColash7 from './assets/img/services/aerodinamicaYaccesorios/colash7.jpg';
import aerodinamicaColash8 from './assets/img/services/aerodinamicaYaccesorios/colash8.jpg';
import aerodinamicaSlider1 from './assets/img/services/aerodinamicaYaccesorios/slider1.jpg';
import aerodinamicaSlider2 from './assets/img/services/aerodinamicaYaccesorios/slider2.jpg';
import aerodinamicaSlider3 from './assets/img/services/aerodinamicaYaccesorios/slider3.jpg';
import aerodinamicaabout1 from './assets/img/services/aerodinamicaYaccesorios/about1.jpg';
import aerodinamicaabout2 from './assets/img/services/aerodinamicaYaccesorios/about2.jpg';
// imagenes del servicio de detaling
import detailingAbout1 from './assets/img/services/detaling/about1.jpg';
import detailingAbout2 from './assets/img/services/detaling/about2.jpg';
import detalingColash1 from './assets/img/services/detaling/colash1.jpg';
import detalingColash2 from './assets/img/services/detaling/colash2.jpg';
import detalingColash3 from './assets/img/services/detaling/colash3.jpg';
import detalingColash4 from './assets/img/services/detaling/colash4.jpg';
import detalingColash5 from './assets/img/services/detaling/colash5.jpg';
import detalingColash6 from './assets/img/services/detaling/colash6.jpg';
import detalingColash7 from './assets/img/services/detaling/colash7.jpg';
import detalingColash8 from './assets/img/services/detaling/colash8.jpg';
import detalingSlider1 from './assets/img/services/detaling/slider1.jpg';
import detalingSlider2 from './assets/img/services/detaling/slider2.jpg';
import detalingSlider3 from './assets/img/services/detaling/slider3.jpg';
import detalingHero from './assets/img/services/detaling/detalingHero.jpg';


const initialState = {
  navbar: {
    links: ['Inicio','Nosotros','Servicios','Contacto','Escribenos al:',' +52 55 6319 6673'],
    servicios: ['Entintado de faros', 'Aerodinamica y Accesorios', 'Filtros', 'Hydrografia', 'Paint Protection', 'Pintura en Rines y Calipers', 'Detaling','Sistemas De Escape','Suspension Deportiva','Valvulas De Alivio','Wrap'],
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
  about: {
    imgHero: detalingHero,
    decorate: aerodinamica,
    title: 'Tiutlo',
    details: 'acerca de nosotros',
    lista: [ 
      { id: 1, item: 'hola' },
      { id: 2, item: 'hola' },
      { id: 3, item: 'hola' },
      { id: 4, item: 'hola' },
      { id: 5, item: 'hola' }, 
    ]
  },
  contact: {
    imgHero: contactHero,
    decorate: aerodinamica,
    title: 'Contactanos',
    details: 'Somos la mejor opción en el mercado',
    name: 'Nombre',
    yourName: 'Tú nombre',
    email: 'Correo',
    yourEmail: 'correo@email.com',
    message: 'Mensaje',
    yourMessage: 'Tú Mensaje',
    button: 'Enviar Mensaje'
  },
  services: {
    InkingLights:{
      hero: {
        logo: logoHome,
        hero: 'ENTINTADO DE FAROS',
        bg: farosHero
      },
      aboutSlider:{
        title: '¿Qué es?',
        details: 'Es un FILTRO de alto flujo o de alto rendimiento para un vehículo, es un aditamento que esta hecho de los mejores materiales, implementando elementos como algodón, mallas y una combinación de aceite con algodón, logrando un mayor bloqueo en la entrada de polvo, permitiendo en flujo de aire más completo y limpio obteniendo un envío de alto flujo de aire, restringiendo la anticontaminación del motor',
        imgs: [ 
          { id: 1, img: farosslider1 }, 
          { id: 2, img: farosslider2 }, 
          { id: 3, img: farosslider3 }, 
        ]
      },
      aboutProcess: {
        title1: '¿PARA QUE SIRVE EL ENTINTADO DE FAROS?',
        details1: ['La mayoría de nosotros sabemos que las luces de los autos tienden a desgastarse, ponerse amarillas o ponerse feas. Es causada principalmente por el polvo y los rayos UV del sol.','El teñir sus luces con una película protectora puede evitar este daño y mantenerlas bonitas al mismo tiempo preservando la visibilidad original'],
        theory: [ 
          { id: 1, 
            title: '¿CÓMO LO HACEMOS?',
            description: ['UTILIZAMOS UN VINIL FABRICADO ESPECIALMENTE PARA DARLE UN ENTINTADO A TUS FAROS O CALAVERAS EL CUAL NO DAÑA NI DEJA RESIDUO DE PEGAMENTO'], 
          },
          { id: 2,
            title: '¿QUE MARCA UTILIZAMOS PARA ENTINTAR LOS FAROS?',
            description: ['Los tintes VViViD están hechos de un material más grueso y resistente, capaz de soportar astillas de roca, el calor de los faros y otros desgastes.'], 
          }
         ],
        video: ['https://www.youtube.com/embed/Zw1rVVgOXnU'],
        imgs: [ 
          { id: 1, img: farosabout1 },
          { id: 2, img: farosabout2 },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: faroscolash1 },
        { id: 2, img: faroscolash2 },
        { id: 3, img: faroscolash3 },
        { id: 4, img: faroscolash2 },
        { id: 5, img: faroscolash1 },
        { id: 6, img: faroscolash2 },
        { id: 7, img: faroscolash3 },
        { id: 8, img: faroscolash3 },
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
          { id: 1, img: aerodinamicaSlider1 }, 
          { id: 2, img: aerodinamicaSlider2 }, 
          { id: 3, img: aerodinamicaSlider3 }, 
        ]
      },
      aboutProcess: {
        title1: 'VENTAJAS DE LA AERODINAMICA DEL AUTO',
        details1: ['Habitualmente se utiliza como superficie de referencia el área frontal del vehículo, obteniéndose a partir de dos partes: por un lado, el conjunto del parabrisas, el cofre y los espejos laterales, y por otro, la parte baja del frente del vehículo, es decir, de la fascia. Las formas suaves de las defensas, retrovisores, faros, etc, mejoran la aerodinámica, esto al no ocupar mucho espacio.','Aunque un final del techo o del maletero en esquina y dirigido hacia abajo, como por ejemplo los monovolúmenes, es mejor que un final de techo o maletero redondeado como el de los sedanes'],
        theory: [
          {
            id: 1,
            title: 'FUNCION DE ALERONES O SPOILERS EN  TU VEHICULO',
            description: ['los alerones tienen un propósito específico: generar fuerza contra el piso (downforce) gracias al paso del aire. Al hacer que el auto genere una mayor fuerza contra el piso, tendrá mejor agarre, por lo que podrá ir más rápido sin perder estabilidad, sobre todo en las curvas.'],
          },
          {
            id: 2,
            title: '¿Que accesorios ofrecemos para mejorar tu aerodinámica?',
            description: ['Contamos con lips, alerones ,parrillas ,estribos ,carcasas de fibra de carbono y muchos accesorios mas','MANEJAMOS UN AMPLIO SURTIDO EN MODIFICACIONES ESTETICAS PARA TU VEHICULO BUSCANDO ASI SIEMPRE OFRECERTE LOS MEJORES ACCESORIOS DEL MERCADO']
          },
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: aerodinamicaabout1 },
          { id: 2, img: aerodinamicaabout2 },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: aerodinamicaColash1 },
        { id: 2, img: aerodinamicaColash2 },
        { id: 3, img: aerodinamicaColash3 },
        { id: 4, img: aerodinamicaColash4 },
        { id: 5, img: aerodinamicaColash5 },
        { id: 6, img: aerodinamicaColash6 },
        { id: 7, img: aerodinamicaColash7 },
        { id: 8, img: aerodinamicaColash8 },
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
        details1: ['La funcionalidad principal del filtro de alto flujo es la de obtener un mejor flujo de aire para el motor, ya que gracias a eso podremos obtener un mejor desempeño para el motor, ya sea en las sensaciones de manejo, más rendimiento del combustible y un incremento en la potencia del motor.'],
        theory: [
          {
            id: 1,
            title: '¿Que contiene?',
            description: ['Kits de Inducción K&N de Alto Rendimiento',
            '•	Kits de admisión de 57i, Kits de rendimiento de inyección de combustible: kits FIPK, Typhoon y AirCharger',
            '•	Reemplaza el filtro de aire y el sistema de admisión restrictivos de fábrica',
            '•	Lo último en el diseño de alto rendimiento de K&N',
            '•	Diseñado para aumentar los caballos de potencia y la aceleración hasta en un 10%',
            '•	Funciona con los sistemas originales de la computadora del equipo y de control de emisiones'
            ],
          },
          {
            id: 2,
            title: 'Tiempo de vida',
            description: ['El fabricante estima una duración del filtro de 10 años o 1,600,000 km, tomando en cuenta el buen uso y mantenimiento adecuado.']
          },
          {
            id: 3,
            title: 'Garantía',
            description: ['Garantía limitada de un año con el fabricante. Aplican Restricciones, ver manual de fabricante.']
          }
        ],
        video: ['https://www.youtube.com/embed/yMeFHshRH6Y','https://www.youtube.com/embed/TvnMPW-BRU8','https://www.youtube.com/embed/_5stjJi53QM','https://www.youtube.com/embed/wf3ABF7TPKo'],
        imgs: [ 
          { id: 1, img: filtros },
          { id: 2, img: filtros },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      table: [
        {
          id: 1,
          text: 'Vehículos que aplica',
        },
        {
          id: 2,
          text: 'Todos con restricciones por modelo y año del vehículo'
        },
        {
          id: 3,
          text: 'Instalación'
        },
        {
          id: 4,
          text: 'Si aplica'
        },
        {
          id: 5,
          text: 'Garantía'
        },
        {
          id: 6,
          text: 'Fabricante 1 año'
        },
        {
          id: 7,
          text: 'Tiempo Aproximado de Instalación'
        },
        {
          id: 8,
          text: '1 a 3 horas según modelo'
        }
      ],
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
        details1: ['NO, NO ES REMOVIBLE UNA VEZ APLICADO LA IMPRESIÓN LA UNICA FORMA DE REGRESAR AL COLOR ANTERIOR ES VOLVIENDO A PINTAR '],
        theory: [
          {
            id: 1,
            title: '¿QUE DURABILIDAD TIENE?',
            description: ['La durabilidad es la misma que una  pintura automotriz ya que se protege con transparente que tiene una durabilidad de 5 años '],
          },
          {
            id: 2,
            title: '¿A QUE PIEZAS PUEDO APLICAR LA HIDROGRAFIA?',
            description: ['BASICAMENTE ES APLICABLE A TODO TIPO DE MATERIAL LLAMESE PLASTICO,RESINA,FIBRA DE VIDRIO,MADERA,ETC.','Automotriz  alerones, rines, difusores, lips, interiores, carcasas de espejos.'],
          },
          {
            id: 3,
            title: '¿CUANTO TIEMPO TARDA EN APLICARSE LA HIDROGRAFIA?',
            description: ['ESTO DEPENDERA DE LA CANTIDAD Y FORMA DE LAS PIEZAS A REALIZAR LA IMPRESIÓN NUESTRO ESTIMADO VA DESDE 1 HASTA 4 DIAS'],
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
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
        details1: ['Paint Protection Film es una solución integral que actúa como una barrera invisible, preservando la pintura original para que quede intacta con el paso del tiempo.','El Paint Protection Film es una inversión que ayuda a conservar el valor de reventa de tu coche al proteger su pintura original y  al mantener el exterior del vehículo como nuevo durante un período de tiempo'],
        theory: [
          {
            id: 1,
            title: '¿DÓNDE PUEDO INSTALAR PAINT PROTECTION FILM?',
            description: ['El PPF se puede instalar en cualquier área que esté expuesta a daños frecuentes y potenciales.']
          },
          {
            id: 2,
            title: '¿DURABILIDAD?',
            description: ['Dependiendo la calidad del vinil podríamos hablar desde 3 hasta 10 años']
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
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
    pinturaRines:{
      hero: {
        logo: logoHome,
        hero: 'PINTURA EN RINES Y CALIPERS',
        bg: pinturaRines
      },
      aboutSlider:{
        title: '¿PORQUE DEBERIA PINTARLOS?',
        details: 'PARTE IMPORTANTE EN LA ESTETICA DE UN COCHE SON LOS RINES Y CALIPERS YA QUE SON PARTES 100% VISIBLES EN TODO MOMENTO POR ESE MISMO MOTIVO OFRECEMOS LA MAS ALTA CALIDAD EN PINTURA DE LOS MISMOS',
        imgs: [ 
          { id: 1, img: pinturaRines }, 
          { id: 2, img: pinturaRines }, 
          { id: 3, img: pinturaRines }, 
        ]
      },
      aboutProcess: {
        title1: '¿COMO LOS PINTAN?',
        details1: ['UTILIZAMOS PRODUCTOS COMPLETAMENTAMENTE AUTOMOTRICES UTILIZANDO ADEMAS UN HORNO DE PINTURA PARA QUE TUS RINES Y CALIPERS LUZCAN INCREIBLES'],
        theory: [
          {
            id: 1,
            title: '¿QUE GARANTIA OFRECEN?',
            description: ['NUESTROS TRABAJOS TIENEN UN AÑO DE GARANTIA']
          },
          {
            id: 2,
            title: '¿PUEDO PINTARLOS DEL COLOR QUE SEA?',
            description: ['CLARO TU IMAGINACION ES EL LIMITE']
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: pinturaRines },
          { id: 2, img: pinturaRines },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: pinturaRines },
        { id: 2, img: pinturaRines },
        { id: 3, img: pinturaRines },
        { id: 4, img: pinturaRines },
        { id: 5, img: pinturaRines },
        { id: 6, img: pinturaRines },
        { id: 7, img: pinturaRines },
        { id: 8, img: pinturaRines },
      ]
    },
    detaling:{
      hero: {
        logo: logoHome,
        hero: 'DETALING',
        bg: detalingHero
      },
      aboutSlider:{
        title: '¿QUE ES EL DETAILING?',
        details: 'El amor hacia tu vehículo puede ser tan grande que el Car Detailing sea tu único pensamiento. Y es que no hay nada más satisfactorio que tener tu auto en perfectas condiciones y lo hagas lucir como nuevo en cada momento. El “Detailing” o “Detallado” es el conjunto de técnicas y procesos especializados y destinados a la limpieza, rejuvenecimiento y protección de las distintas superficies de un vehículo. La utilización de técnicas, procesos y productos adecuados marcan la diferencia entre una simple limpieza y un verdadero resultado “Show Car” o coche de exposición, ya que este el objetivo primordial de PAINT EXPLOSION. Una  correcta limpieza pasa por el uso de las herramientas y productos adecuados, que no sean agresivos para los materiales. Eliminar suciedad es relativamente fácil, pero realizarlo sin rayar o arañar la pintura se requiere paciencia con la tecnica adecuada, con ello lograremos que además  que brille lograremos que tu destaque a lado de otros ya que a rejuvenecido. El rejuvenecimiento se refiere a la recuperación de ese aspecto de nuevo mediante diferentes procesos dependiendo del tipo de superficie, como el pulido de la pintura hasta el nutrido de asientos de cuero, gomas, etc….',
        imgs: [ 
          { id: 1, img: detalingSlider1 }, 
          { id: 2, img: detalingSlider2 }, 
          { id: 3, img: detalingSlider3 }, 
        ]
      },
      aboutProcess: {
        title1: '¿Por qué detallar un vehículo?',
        details1: ['Existen diferentes razones para detallar un coche:'],
        theory: [
          {
            id: 1,
            title: '¿Por qué detallar un vehículo?',
            description: ['Existen diferentes razones para detallar un coche:','•	Satisfacción personal por saber que tienes un auto que luce radiante.','•	Aumentar el valor económico en un posible precio a la hora de una posible venta de tu auto.','•	La imagen del auto es sumamente llamativa y notaras un aumento de vida en los elementos que lo componen.','•	Recuperación estética de tu auto de pequeños daños producidos por cuidados erróneos','•	Garantizar una mejor conservación de tu auto y sus materiales a largo plazo. Protegiéndolo de los agentes externos (UV, lluvia ácida, contaminantes…)']
          },
          {
            id: 2,
            title: 'PROCESOS',
            description: ['1. LAVADO','Es el primer proceso y la base de todo buen “Detailing”, es también el proceso que más puede afectar nuestra pintura, si es que no se hace de manera correcta. Por ejemplo en nuestro país muchos usan solo un balde, que muchas veces es agua reciclada, y un trapo para quitarle la suciedad que no es necesariamente de microfibra.',
            'Ahora bien un correcto lavado es utilizar máquinas a presión que puedan quitar la suciedad de manera más profunda, rápida y eficiente.','2. SECADO','Generalmente en este paso muchos utilizan el mismo trapo con el que lavaron pero bien exprimido o en algunas veces dejan que la carrocería se seque sola pero quedan las huellas del agua.','La manera correcta es utilizando toalla de microfibra, que absorben hasta 7 veces más que el algodón. Asimismo, una pistola de secado que permite correr el agua de las zonas más recónditas de nuestra carrocería','3.- DESCONTAMINADO','Esta técnica se realiza utilizando un material denominado “clay bar” o “barra de arcilla” que consiste en una resina sintética que se encarga de atrapar las diferentes partículas que se pueden encontrar en la pintura, esto se realiza luego de lavar y secar el vehículo.','Asimismo, esta arcilla también se puede pasar por cristales, plásticos y cromados.','4.- PULIDO','Llamado también “Polish” es un compuesto cremoso que contiene micro abrasivos, los cuales tienen la misión de eliminar las imperfecciones de nuestra pintura y le regresa el brillo pero debemos tomar en cuenta que no elimina los arañones profundos.','Si bien se puede hacer a mano, la mejor forma es con una máquina pulidora ya que obtenemos mejores resultados y más rápidos. No obstante, siempre es bueno que se realice por profesionales ya que sabrán qué tipo de “Polish” utilizar para eliminar esos pequeños rasguños.','5.- ENCERADO','Básicamente la cera es un componente que sirve como capa de protección para nuestra pintura así como para darle un brillo extra. La aplicación correcta es echar la cera en toda la carrocería (es mejor usar el color del auto), esperar que seque y luego se retira con una toalla de microfibra.','6.- ALFOMBRA Y CIELO','Deben de ser correctamente aspiradas y rociados con una solución que logre retirar las manchas.','7.- EL TABLERO','Debe limpiarse de la tierra e impurezas para luego rociar con silicona y tener una mayor protección contra la suciedad y rayos UV.','8.- PISOS','Dependiendo de cual tengamos, si fuera de jebe o de alfombras. En el primer caso el lavado es a presión con shampoo y el segundo una aspirada concienzuda para aplicarle una solución que quite manchas','9.- ASIENTOS','Ya sea que los tengamos de cuero (se le coloca un renovador, previamente una limpieza para quitarle las impurezas) y si fuera de tela (se aspira correctamente y se le pasa una esponja con agua y jabón especial para quitarle las manchas)','10.- PLASTICOS','Se procede con la limpieza previa para luego colocarles renovadores para mantener el brillo de los mismos.Para finalizar también se limpian las llantas con silicona y los aros con agua y shampoo.','¿Imaginas cómo quedará tu auto después de este proceso?','11.- PROCESO CERAMICO','Como último paso del auto detailing, se aplica la protección cerámica al automóvil. Esta es una base que protege la pintura del sol. Este recubrimiento cerámico es tan fuerte que sólo puede removerse a través de la abrasión. ','México ha incursionado en el car detailing durante los últimos años con mucho éxito, ya que nuestro país se caracteriza por ser un amante de los autos. Según cifras del IMCO, en 2017 el parque vehicular creció casi 5 veces más que la tasa de población, lo cual representa un área de oportunidad para los empresarios automovilísticos.']
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: detailingAbout1 },
          { id: 2, img: detailingAbout2 },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: detalingColash1 },
        { id: 2, img: detalingColash2 },
        { id: 3, img: detalingColash3 },
        { id: 4, img: detalingColash4 },
        { id: 5, img: detalingColash5 },
        { id: 6, img: detalingColash6 },
        { id: 7, img: detalingColash7 },
        { id: 8, img: detalingColash8 },
      ]
    },
    sistemasEscape:{
      hero: {
        logo: logoHome,
        hero: 'SITEMAS DE ESCAPE',
        bg: sistemaEscape
      },
      aboutSlider:{
        title: '¿Qué es?',
        details: 'El sistema de escape de un vehículo es el responsable de conducir hacia el exterior los residuos que se producen en un motor de combustión interna. Todo proceso de combustión conlleva la generación de residuos, residuos que se producen por diferentes motivos, por ejemplo, cuando la combustión, es decir, la quema del combustible, no se produce completamente se generan residuos “no quemados” que deben ser sacados de la recamara de combustión para repetir el proceso. Entonces, como el proceso de combustión dentro de un motor es cíclico, es decir, repetitivo, la generación de residuos dentro de la recamara que deben ser expedidos hacia el exterior son constantes. Es allí, donde entra la importancia del sistema de escape, ya que, es a través de él que estos residuos son conducidos hacia afuera del vehículo.',
        imgs: [ 
          { id: 1, img: sistemaEscape }, 
          { id: 2, img: sistemaEscape }, 
          { id: 3, img: sistemaEscape }, 
        ]
      },
      aboutProcess: {
        title1: '¿Para qué sirve?',
        details1: ['El sistema de escape fue diseñado para la correcta eliminación de los gases de escape desde la recamara de combustión hacia el exterior del vehículo.','Gracias a los avances de la ciencia en los diferentes puntos de la tecnología y el aumento de la preocupación por el cuidado del planeta han sido diseñados formas cada vez mejores de poder controlar que estos gases de efecto invernadero cada vez sean menos dañinos para el ambiente.'],
        theory: [ 
          {
            id: 1,
            title: '¿EN QUE AYUDA UN SISTEMA DE ESCAPE DEPORTIVO?',
            description: ['Al intercambiar el sistema de escape original del automóvil, por uno de alto desempeño lo que se logra es obtener una ruta más rápida y eficiente para que desemboquen los gases de escape del motor.','esta solución permite que el motor "respire" mejor, por lo que el combustible quemado y el aire salen de las cámaras de combustión mucho más rápido. Esto significa que se puede quemar más combustible y aire para crear más poder.']
          },
          {
            id: 2,
            title: 'Tiempo de vida',
            description: ['El fabricante estima una duración de por vida, tomando en consideración el uso y mantenimiento. ']
          },
          {
            id: 3,
            title: 'Garantía',
            description: ['Garantía de por vida. Aplican Restricciones, ver manual de fabricante.']
          }
         ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: sistemaEscape },
          { id: 2, img: sistemaEscape },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: sistemaEscape },
        { id: 2, img: sistemaEscape },
        { id: 3, img: sistemaEscape },
        { id: 4, img: sistemaEscape },
        { id: 5, img: sistemaEscape },
        { id: 6, img: sistemaEscape },
        { id: 7, img: sistemaEscape },
        { id: 8, img: sistemaEscape },
      ]
    },
    suspensionDeportiva:{
      hero: {
        logo: logoHome,
        hero: 'SUSPENSION DEPORTIVA',
        bg: suspension
      },
      aboutSlider:{
        title: '¿QUE ES Y COMO FUNCIONA?',
        details: 'Este sistema se encarga de recibir las oscilaciones del terreno para minimizarlas o suprimirlas de tal forma que no se desajuste el vehículo, creando en los ocupantes una sensación de confort. La suspensión deportiva mejora la apariencia de su vehículo y añade estabilidad para aumentar su confianza de coducción en la pisada de las ruedas',
        imgs: [ 
          { id: 1, img: suspension }, 
          { id: 2, img: suspension }, 
          { id: 3, img: suspension }, 
        ]
      },
      aboutProcess: {
        title1: '¿Para qué sirve?',
        details1: ['Su objetivo es mejorar el manejo, ya que, al modificar estos componentes, obtienes un mayor agarre, confort y direccionalidad de las ruedas, la estabilidad al tomar una curva será más eficiente y con esto se logra aprovechar todas las condiciones del vehículo.','Además, que ayuda a una obtener una mejor estética del vehículo ya que se bajará a una distancia ideal con el suelo.'],
        theory: [
          {
            id: 1,
            title: 'Tiempo de vida',
            description: ['El fabricante estima una duración de amortiguadores BLISTEIN de por vida, según su uso, mantenimiento y tipo de producto.'],
          },
          {
            id: 2,
            title: 'Garantía',
            description: ['Garantía de por vida, según modelo. Aplican Restricciones, ver manual de fabricante.']
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: suspension },
          { id: 2, img: suspension },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: suspension },
        { id: 2, img: suspension },
        { id: 3, img: suspension },
        { id: 4, img: suspension },
        { id: 5, img: suspension },
        { id: 6, img: suspension },
        { id: 7, img: suspension },
        { id: 8, img: suspension },
      ]
    },
    valvulasAlivio:{
      hero: {
        logo: logoHome,
        hero: 'VALVULAS DE ALIVIO',
        bg: valvulas
      },
      aboutSlider:{
        title: '¿QUE ES?',
        details: 'Una válvula de alivio o Wastegate es un dispositivo integrado en un turbocompresor que controla la presión de sobrealimentación máxima permitida.  La válvula de descarga es un componente en un turbocompresor que desvía los gases de la turbina. La función principal de la válvula de descarga es regular la presión de sobrealimentación óptima en los sistemas de turbocompresor para proteger el turbocompresor y el motor. El desvío de los gases de escape ajusta la velocidad de la turbina, que en sintonía ajusta la velocidad de rotación del compresor.',
        imgs: [ 
          { id: 1, img: valvulas }, 
          { id: 2, img: valvulas }, 
          { id: 3, img: valvulas }, 
        ]
      },
      aboutProcess: {
        title1: '¿Para qué sirve?',
        details1: ['Su objetivo es evitar una sobrepresión de los gases de escape que mueven el turbo. De lo contrario, cuando llegasen a determinada velocidad podrían dañar el motor o mover el turbo a tantas revoluciones que se acabase rompiendo. ','La regulación de esta válvula permite determinar la presión máxima de soplado del turbo'],
        theory: [
          {
            id: 1,
            title: 'Tipos de Válvulas',
            description: ['•	Válvula de descarga blow off','Como es la que expulsa el aire sobrante al exterior.','También suele llamarse válvula de descarga atmosférica, precisamente por lanzar al aire a presión a la atmósfera. Este tipo de válvulas es característica de los sonidos realizados al revolucionar el vehículo ','•	Válvula de descarga de bypass','Una válvula de compresión bypass,  también llamada válvula de recirculación, no saca el aire sobrante fuera. En su caso lo envía a la admisión, pero antes del turbo. Es decir, en la parte de donde el turbo saca el aire para luego presurizarlo y meterlo en el motor. Es importante que lo envíe a un lugar donde el caudalímetro pueda medir bien el aire que entra realmente. De lo contrario la mezcla de aire y combustible será incorrecta.']
          },
          {
            id: 2,
            title: 'Tiempo de vida',
            description: ['El fabricante estima una duración de la válvula de 5 años, tomando en cuenta el buen uso y mantenimiento adecuado.']
          },
          {
            id: 3,
            title: 'Garantía',
            description: ['Garantía limitada de 6 meses con el fabricante. Aplican Restricciones, ver manual de fabricante.']
          }
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg'],
        imgs: [ 
          { id: 1, img: valvulas },
          { id: 2, img: valvulas },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: valvulas },
        { id: 2, img: valvulas },
        { id: 3, img: valvulas },
        { id: 4, img: valvulas },
        { id: 5, img: valvulas },
        { id: 6, img: valvulas },
        { id: 7, img: valvulas },
        { id: 8, img: valvulas },
      ]
    },
    wrap:{
      hero: {
        logo: logoHome,
        hero: 'WRAP',
        bg: wrap
      },
      aboutSlider:{
        title: '¿Que es un wrap o forrado automotriz?',
        details: 'Una de las tendencias mas populares en el mundo de la personalización de los autos, dentro del tuning de automóviles, es cambiar el color de la pintura por medio del vinil personalizado también conocido como wrapping.El wrapping es el vinilado de un vehículo. Se aplica directamente sobre la pintura original. El objetivo es cambiar la apariencia de tu vehículo sin perder la original, y mantenerlo en perfectas condiciones a su estado original al retirar el vinilo.Básicamente, esta técnica permite cambiar de color la carrocería, pero sin el clásico proceso de pintado, lo que permite que cuando se desee se puede volver al tono original simplemente retirando el material. Una más de las ventajas es que, además de cambiar de color, ciertos vinilos permiten dar textura al vehículo.Igualmente, otra ventaja es que, si no se desea aplicar el vinil por completo, es posible personalizar el automóvil recubriendo solamente los espejos laterales, la parrilla delantera, colocar un diseño, imagenes o el techo, son algunos ejemplos.Otra de las ventajas que se ofrece, es una infinita variedad de colores ya sea en colores mate, brillososo, colores cromo espejo o bien la posibilidad de personalizar el color o los gráficos, algo que sería sumamente costoso o imposible si se hace por medio de la pintura.',
        imgs: [ 
          { id: 1, img: wrap }, 
          { id: 2, img: wrap }, 
          { id: 3, img: wrap }, 
        ]
      },
      aboutProcess: {
        title1: '¿Daña mi pintura?',
        details1: ['No, como se comentó son vinilos especialmente diseñados para la industria automotriz los cuales no dejaran residuos de pegamento  ni dañaran su pintura por el contrario esta se mantendrá mas tiempo intacta de los rayos uv y al momento de retirarlo su pintura aun lucirá como antes de que se aplicara el vinilo'],
        theory: [
          {
            id: 1,
            title: '¿Cuanto me durara?',
            description: ['EL Wrap para su vehículo profesionalmente aplicado durará entre 3 y 5 años. Cada vinilo tiene sus especificaciones y tiempos de garantía según su categoría.']
          },
          {
            id: 2,
            title: '¿Necesita cuidados especiales?',
            description: ['No, es requerido por el fabricante una limpieza en especial sin embargo han salido al mercado productos para alargar la apariencia y durabilidad del mismo además de algunos consejos útiles para su cuidado serían los siguientes','*evitar la exposición prolongada al sol','*proteger tu forrado con cerámicos especiales para vinil']
          },
          {
            id: 3,
            title: '¿Tengo rayones o abolladuras se notarían tras ser forrado?',
            description: ['La respuesta es si,La mayoría de casos de este tipo lo mejor es reparar estas imperfecciones para que quede un acabado excelente.En algunos rayones muy superficiales es posible que el vinil cubra el mismo PARA ESTO ES NECESARIO UNA INSPECCION FISICA']
          },
          {
            id: 4,
            title: '¿Como reparan un golpe  o rayón?',
            description: ['En estos casos es necesario retirar ese panel completo y volverlo a forrar para siempre dar un resultado espectacular']
          },
          {
            id: 5,
            title: '¿Con que marcas trabajan?',
            description: ['Avery dennison,3m, hexis, sunswrap luxury anexar logos']
          },
          {
            id: 6,
            title: '¿COMO LAVO MI VEHICULO FORRADO?',
            description: ['SE PUEDE LAVAR CON AGUA A PRESION ( KARCHER) O TRAPOS HUMEDOS','NUNCA METER A UN TUNELES Y/O ARCOS DE LAVADO']
          },
        ],
        video: ['https://www.youtube.com/embed/21wVZpgtDqg',],
        imgs: [ 
          { id: 1, img: wrap },
          { id: 2, img: wrap },
        ],
        title3: '¿Qué colores manejan?',
        title4: '¿Qué durabilidad tiene?',
        details3: 'azul, humo y humo obscuro',
        details4: '4 a 6 años dependiendo de la exposicion al sol',
      },
      colash: [
        { id: 1, img: wrap },
        { id: 2, img: wrap },
        { id: 3, img: wrap },
        { id: 4, img: wrap },
        { id: 5, img: wrap },
        { id: 6, img: wrap },
        { id: 7, img: wrap },
        { id: 8, img: wrap },
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


