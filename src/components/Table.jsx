import React from 'react';

import './styles/Table.scss';

const Table = ( {data} ) => {
  return(
    <>
    <section className="Table">
      { data.map( datos => (
        <div key={datos.id} className="Table__item"> 
          <p>
          {datos.text.toUpperCase()} 
          </p>
        </div>
      ) ) }
    </section>
    </>
  )
}

export default Table;