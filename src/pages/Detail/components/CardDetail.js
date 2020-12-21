import React, { useContext } from 'react'
import { Score } from '../../../components/Score'
import { MessageContext } from './../../../contexts/MessageContext'

export const CardDetail = (props) => {
  const messageValue = useContext(MessageContext)
  return (
  <article className="card-detail">
    <img alt="logs experience" src={props.image} />
    <div> 
      <p> {props.title}</p>
      <h2>COP <small>{props.price}</small></h2>
      <Score stars={props.score} users={props.users} size={props.size} />
    </div>
  </article>
  )
}