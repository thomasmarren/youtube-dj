import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VolumeSlider from './VolumeSlider'
import CrossFader from './CrossFader'
import toggleAutoplay from '../actions/toggleAutoplay'

class Controller extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.toggleAutoplay(this.props.queue)
  }

  render(){

    var autoplayButton = this.props.queue.autoplay ? "autoplay-button-active" : "default-button"

    return(
      <div id="" className="controller">
        <VolumeSlider id={"left-volume"} deck={this.props.deck1}/>
        <VolumeSlider id={"right-volume"} deck={this.props.deck2}/>
        <br />
        <br />
        <CrossFader />
        <br />
        <button className={autoplayButton} onClick={this.handleClick}>Autoplay</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    deck1: state.deck1,
    deck2: state.deck2,
    queue: state.queue
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ toggleAutoplay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
