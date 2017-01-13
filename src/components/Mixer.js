import React, { Component } from 'react';
import Deck from './Deck'
import { connect } from 'react-redux';

class Mixer extends Component {

  render(){

    return(
      <div>
        <Deck deck={this.props.deck1} />
        <h1 id="mixer" className="two columns">CONTROLLER</h1>
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
