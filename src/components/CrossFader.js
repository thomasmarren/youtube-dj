import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import crossFade from '../actions/crossFade'

class CrossFader extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.resetCrossFader = this.resetCrossFader.bind(this)
  }

  handleChange(event){
    var slider = event.currentTarget.value
    this.props.crossFade(slider, this.props.decks)
  }

  resetCrossFader(){
    this.props.crossFade('50', this.props.decks)
  }

  render() {
    return (
      <div>
        <input className="cross-fader-slider" onDoubleClick={this.resetCrossFader} onChange={this.handleChange} type="range" min={0} max={100} step={1} value={this.props.slider}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    slider: state.crossFader.slider,
    decks: {deck1: state.deck1, deck2: state.deck2}
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ crossFade }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CrossFader);
