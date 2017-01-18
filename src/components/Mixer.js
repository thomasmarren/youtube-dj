import React, { Component } from 'react'
import Deck from './Deck'
import { connect } from 'react-redux'
import Controller from './Controller'

class Mixer extends Component {

  render(){

    return(
      <div>
        <Deck deck={this.props.deck1} />
        <Controller />
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
