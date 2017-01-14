import React, { Component } from 'react';
import YouTubeVideo from 'stateful-react-youtube'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setPosition from '../actions/setPosition'
import togglePlaying from '../actions/togglePlaying'
import adjustVolume from '../actions/adjustVolume'

class Deck extends Component {

  constructor(props){
    super(props)
    this.handleSetPosition = this.handleSetPosition.bind(this)
    this.handleTogglePlaying = this.handleTogglePlaying.bind(this)
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
  }

  handleTogglePlaying(){
    this.props.togglePlaying(!this.props.deck.status.playing, this.props.deck)
  }

  handleSetPosition(position) {
    this.props.setPosition(position, this.props.deck);
  }

  handleVolumeChange(event){
    var slider = event.currentTarget.value
    this.props.adjustVolume(slider, this.props.deck)
  }

  render(){

    let duration = Math.floor(this.props.deck.status.position / 1000)

    var volume = this.props.deck.status.volume
    if(this.props.deck.crossFader.active){
      volume = Math.floor(((this.props.deck.crossFader.ratio * 2) * .01) * this.props.deck.status.volume)
    }

    var volumeSlider = <input id="left-volume" className="volume cross-fader-slider" onChange={this.handleVolumeChange} type="range" min={0} max={100} step={1} value={this.props.deck.status.volume} />
    var volumeSliderDeck1
    var volumeSliderDeck2
    if(this.props.deck.position === "1"){
      volumeSliderDeck1 = volumeSlider
      volumeSliderDeck2 = <span display="hidden" />
    } else {
      volumeSliderDeck1 = <span display="hidden" />
      volumeSliderDeck2 = <input id="right-volume" className="volume cross-fader-slider" onChange={this.handleVolumeChange} type="range" min={0} max={100} step={1} value={this.props.deck.status.volume} />
    }


    return(
      <div className="five columns">
      <h1>CrossFader Active? {this.props.deck.crossFader.active.toString()}</h1>
      <h1>TrueVolume {volume}</h1>
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
  return bindActionCreators({ setPosition, togglePlaying, adjustVolume }, dispatch)
}

export default connect(null, mapDispatchToProps)(Deck);
