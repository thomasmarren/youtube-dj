import React, { Component } from 'react';
import YouTubeVideo from 'stateful-react-youtube'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setPosition from '../actions/setPosition'
import togglePlaying from '../actions/togglePlaying'
import VolumeSlider from './VolumeSlider'

class Deck extends Component {

  constructor(props){
    super(props)
    this.handleSetPosition = this.handleSetPosition.bind(this)
    this.handleTogglePlaying = this.handleTogglePlaying.bind(this)
  }

  handleTogglePlaying(){
    this.props.togglePlaying(!this.props.deck.status.playing, this.props.deck)
  }

  handleSetPosition(position) {
    this.props.setPosition(position, this.props.deck);
  }

  render(){

    let duration = Math.floor(this.props.deck.status.position / 1000)

    var volume = this.props.deck.status.volume
    if(this.props.deck.crossFader.active){
      volume = Math.floor(((this.props.deck.crossFader.ratio * 2) * .01) * this.props.deck.status.volume)
    }

    var volumeSliderDeck1
    var volumeSliderDeck2
    if(this.props.deck.position === "1"){
      volumeSliderDeck1 = <VolumeSlider id={"left-volume"} className={"volume"} deck={this.props.deck}/>
      volumeSliderDeck2 = <span display="hidden" />
    } else {
      volumeSliderDeck1 = <span display="hidden" />
      volumeSliderDeck2 = <VolumeSlider id={"right-volume"} className={"volume"} deck={this.props.deck}/>
    }


    return(
      <div className="five columns">
      <p>Volume: {volume}</p>
      <div>
      <h2>{duration}s</h2>
      <div id="video-volume">
        {volumeSliderDeck2}
        <YouTubeVideo
          position={this.props.deck.status.position}
          videoId={this.props.deck.track.id}
          playing={this.props.deck.status.playing}
          volume={volume}
          playerVars={{
            controls: 0
          }}

          onProgress={this.handleSetPosition}
        / >
        {volumeSliderDeck1}
      </div>
      <br />
      <button onClick={this.handleTogglePlaying}>
        {this.props.deck.status.playing ? "Pause" : "Play"}
      </button>
      </div>
      <br />
      <h3>{this.props.deck.track.title}</h3>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setPosition, togglePlaying }, dispatch)
}

export default connect(null, mapDispatchToProps)(Deck);
