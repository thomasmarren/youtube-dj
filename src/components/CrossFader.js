import React, { Component } from 'react';

export default class CrossFader extends Component {

  constructor(props){
    super(props)
    this.state = {
      slider: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    var slider = event.currentTarget.value
    this.setState({slider: slider})
  }

  render() {
    return (
      <div>
        <h1>{this.state.slider}</h1>
        <input onChange={this.handleChange} type="range" min={1} max={100} step={1} />
      </div>
    )
  }
}
