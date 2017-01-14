import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import adjustVolume from '../actions/adjustVolume'

class VolumeSlider extends Component {

  constructor(props){
    super()
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
  }

  handleVolumeChange(event){
    var slider = event.target.value
    this.props.adjustVolume(slider, this.props.deck)
  }

  render(){

    return(
      <div style={{"display": "inline-block"}}>
        <input id={this.props.id} className="volume" onChange={this.handleVolumeChange} type="range" orient="vertical" min={0} max={100} step={1} value={this.props.deck.status.volume} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ adjustVolume }, dispatch)
}

export default connect(null, mapDispatchToProps)(VolumeSlider);
