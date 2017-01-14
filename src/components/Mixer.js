import React, { Component } from 'react';
import Deck from './Deck'
import CrossFader from './CrossFader'
import { connect } from 'react-redux';

class Mixer extends Component {

  render(){

    return(
      <div>
        <Deck deck={this.props.deck1} />
        <div id="controller" className="two columns">
          <h1>CONTROLLER</h1>
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
