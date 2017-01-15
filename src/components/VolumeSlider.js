import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import adjustVolume from '../actions/adjustVolume'
import Slider from 'rc-slider'
require('rc-slider/assets/index.css')

class VolumeSlider extends Component {

  constructor(props){
    super()
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
  }

  handleVolumeChange(value){
    var slider = value
    this.props.adjustVolume(slider, this.props.deck)
  }

  render(){

    return(
      <div id="volume-slider">
        <Slider
          min={0}
          max={100}
          step={1}
          vertical
          tipTransitionName="rc-slider-tooltip-zoom-down"
          value={this.props.deck.status.volume}
          onChange={this.handleVolumeChange}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ adjustVolume }, dispatch)
}

export default connect(null, mapDispatchToProps)(VolumeSlider);
