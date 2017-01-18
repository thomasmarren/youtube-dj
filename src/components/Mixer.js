import React, { Component } from 'react';
import Deck from './Deck'
import CrossFader from './CrossFader'
import { connect } from 'react-redux';
import VolumeSlider from './VolumeSlider'

class Mixer extends Component {

  render(){

    return(
      <div>
        <Deck deck={this.props.deck1} />
        <div id="controller" className="two columns deck">
          <VolumeSlider id={"left-volume"} deck={this.props.deck1}/>
          <VolumeSlider id={"right-volume"} deck={this.props.deck2}/>
          <br />
          <br />
          <CrossFader />
        </div>
        <Deck deck={this.props.deck2}/>
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

export default connect(mapStateToProps)(Mixer);
