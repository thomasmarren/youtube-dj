import React, { Component } from 'react'
import { connect } from 'react-redux'
import VolumeSlider from './VolumeSlider'
import CrossFader from './CrossFader'

class Controller extends Component {

  render(){

    return(
      <div id="controller" className="two columns deck">
        <VolumeSlider id={"left-volume"} deck={this.props.deck1}/>
        <VolumeSlider id={"right-volume"} deck={this.props.deck2}/>
        <br />
        <br />
        <CrossFader />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    deck1: state.deck1,
    deck2: state.deck2
  }
}

export default connect(mapStateToProps)(Controller);
