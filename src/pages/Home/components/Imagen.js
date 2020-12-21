import React from 'react'

export const Imagen = (props) => (
  <div>
     <div style={{ backgroundImage: `url('${props.image}')` }} className="imagen-container">
         <h5>{props.title}</h5>
         <p>{props.place}</p>
         <h1>{props.price}</h1>
     </div>
  </div>
)
