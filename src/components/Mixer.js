import React, { Component } from 'react'
import Deck from './Deck'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Controller from './Controller'
import crossFade from '../actions/crossFade'
import togglePlaying from '../actions/togglePlaying'
import enableFading from '../actions/enableFading'

class Mixer extends Component {

  constructor(props){
    super(props)
    this.handleAutoplay = this.handleAutoplay.bind(this)
  }

  handleAutoplay(deck){
    var crossFade = this.props.crossFade
    var deck1 = this.props.deck1
    var deck2 = this.props.deck2
    var slider = this.props.crossFader.slider
    var enableFading = this.props.enableFading
    var fade
    if(!this.props.crossFader.fading){
      this.props.enableFading(true)
      if(deck.position === "1"){
        this.props.togglePlaying(true, this.props.deck2)
        fade = setInterval(fadeFn, 1000)
        function fadeFn() {
          if (slider <= 100) {
            crossFade(slider += 4, {deck1: deck1, deck2: deck2}, true)
          } else {
            crossFade(100, {deck1: deck1, deck2: deck2}, false)
            enableFading(false)
            clearInterval(fade)
          }
        }
      } else {
        this.props.togglePlaying(true, this.props.deck1)
        fade = setInterval(fadeFn, 1000)
        function fadeFn() {
          if (slider >= 0) {
            crossFade(slider -= 4, {deck1: deck1, deck2: deck2}, true)
          } else {
            crossFade(0, {deck1: deck1, deck2: deck2}, false)
            enableFading(false)
            clearInterval(fade)
          }
        }
      }
    }
  }

  render(){

    return(
      <div>
        <Deck deck={this.props.deck1} handleAutoplay={this.handleAutoplay} />
        <Controller />
        <Deck deck={this.props.deck2} handleAutoplay={this.handleAutoplay} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    deck1: state.deck1,
    deck2: state.deck2,
    crossFader: state.crossFader,
    queue: state.queue
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ crossFade, togglePlaying, enableFading }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Mixer);
