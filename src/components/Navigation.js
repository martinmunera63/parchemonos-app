import React from 'react'
import { Link } from 'react-router-dom'
import { MENU_OPTIONS } from '../data/MenuOptions'

const ItemMenu = (props) => (   
  <Link to={props.path}> 
    <li>
      <ion-icon name={props.icon}></ion-icon>
    </li>   
  </Link>
)

const ItemMenuHome = (props) => (   
   <Link to={props.path}> 
     <li className="active">
       <ion-icon name={props.icon}></ion-icon>
     </li>   
   </Link>
 )

 /* Funcion ternaria

 */
export const Navigation = () => (
  <nav className="navigation">
    <ul>
      {        
        MENU_OPTIONS.map( (item, key) => item.title === "Inicio" ? 
          <ItemMenuHome key={key} {...item} /> :
          <ItemMenu key={key} {...item} />
          )   
      }
    </ul>
  </nav>
)