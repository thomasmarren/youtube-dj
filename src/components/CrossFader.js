import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import crossFade from '../actions/crossFade'

class CrossFader extends Component {

  constructor(props){
    super(props)
    this.state = {
      slider: 50
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    var slider = event.currentTarget.value
    // this.props.crossFade(slider, this.props.decks)
    this.setState({slider: slider})
  }

  render() {
    return (
      <div>
        <h1>{this.state.slider}</h1>
        <input onChange={this.handleChange} type="range" min={0} max={100} step={1} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    decks: {deck1: state.deck1, deck2: state.deck2}
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ crossFade }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CrossFader);
