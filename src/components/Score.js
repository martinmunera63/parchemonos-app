import React, { useContext }  from 'react'
import { MessageContext } from './../contexts/MessageContext'

const StarFill = ({size}) => (
    <ion-icon style={{ fontSize: size }} name="star"></ion-icon>
)

const StarEmpty = ({size}) => (
    <ion-icon style={{ fontSize: size }} name="star-outline"></ion-icon>
)

export const Score = ({ stars = 0, users = 0, size = '14px' }) => {
    const messageValue = useContext(MessageContext)
    return (
    <section className="score">
    <div>
    
       {
/* recoremos de 1 a 5, .map recorre cada una de las posiciones, si el valor que nos llega 
* es menor o igual al parametro  entonces pinte la estrella rellena de lo contrario pintela vacio
*/           
         [1,2,3,4,5].map(el => el <= stars ? <StarFill size={size} /> : <StarEmpty size={size} /> )
       } 
    </div>
    
    <p style={{ fontSize: size }} >{ users } usuarios</p> 
    <p> { messageValue } </p>    
    </section>
    )
}