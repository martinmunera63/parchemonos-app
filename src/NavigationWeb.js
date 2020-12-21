import React from 'react'
import { Link } from 'react-router-dom'
import { MENU_OPTIOS} from './../../'

const ItemMenu = (props) => (
    <Link to={props.path}>
          <li>
              <ion-icon name={props.icon}></ion-icon>
              { props.title }
          </li>
    </Link>
)

export const NavigationWeb = () => {
<nav className="navigation-web" >
<div>
   <img src="/static/logo1.png" alt="logo" />   
</div>
<ul>
    {
        MENU_OPTIOS.map( (el, key) => <ItemMenu key={key} {...el} /> )
    }
</ul>
</nav>
}