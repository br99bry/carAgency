import React from 'react';


import './styles/Colash.scss';

const colash = ( {data} ) => {
  return (
    <>
    <section className="colash">
      {data.map( img =>(
        <img src={img.img} alt=""/>
      ))
      }
    </section>
    </>
  )
}

export default colash;