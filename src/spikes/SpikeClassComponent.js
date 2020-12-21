import React, { Component } from 'react'

/* Clase de reac */
export default class SpikeClassComponent extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            number1:3,
            number2:6
        }
    }
    render () {
      return (
      <div>
        <p>hola</p>
        <input value={this.state.number1} 
        onChange={ e => this.setState({number1:e.target.value})} 
        type="text" />
        <br/>
        <input value={this.state.number2} 
        onChange={ e => this.setState({number2:e.target.value})} 
        type="text" />
        <input value={this.state.number2} type="text" />
     </div>
     )
    }
}