import React, { Component } from 'react';
import YouTubeVideo from 'stateful-react-youtube'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setDuration from '../actions/setDuration'
import setPosition from '../actions/setPosition'
import togglePlaying from '../actions/togglePlaying'
import restartTrack from '../actions/restartTrack'
import TrackProgressBar from './TrackProgressBar'

class Deck extends Component {

  constructor(props){
    super(props)
    this.handleOnReady = this.handleOnReady.bind(this)
    this.handleSetPosition = this.handleSetPosition.bind(this)
    this.handleRestartTrack = this.handleRestartTrack.bind(this)
    this.handleTogglePlaying = this.handleTogglePlaying.bind(this)
  }

  handleOnReady({ duration }) {
    this.props.setDuration(duration, this.props.deck)
  }

  handleSetPosition(position) {
    this.props.setPosition(position, this.props.deck);
  }

  handleRestartTrack() {
    this.props.restartTrack(this.props.deck);
  }

  handleTogglePlaying(){
    this.props.togglePlaying(!this.props.deck.status.playing, this.props.deck)
  }

  render(){

    let position = Math.floor(this.props.deck.status.position / 1000)
    let duration = Math.floor(this.props.deck.status.duration / 1000)

    function convertElapsedTime(inputSeconds){
      let seconds = inputSeconds % 60
      if(seconds < 10){ seconds = "0" + seconds}
      let minutes = Math.floor(inputSeconds / 60)
      return minutes + ":" + seconds
    }

    var volume = this.props.deck.status.volume
    if(this.props.deck.crossFader.active){
      volume = Math.floor(((this.props.deck.crossFader.ratio * 2) * .01) * this.props.deck.status.volume)
    }

    return(
      <div className="five columns">
      <div>
      <p>{convertElapsedTime(position)}/{convertElapsedTime(duration)}</p>
      <TrackProgressBar deck={this.props.deck}/>
      <div id="video-volume">
        <YouTubeVideo
          position={this.props.deck.status.position}
          videoId={this.props.deck.track.id}
          playing={this.props.deck.status.playing}
          volume={volume}
          playerVars={{
            controls: 0
          }}

          onReady={this.handleOnReady}
          onProgress={this.handleSetPosition}
        / >
      </div>
      <p>Volume: {volume}</p>
      <button onClick={this.handleRestartTrack}>
        Back to Start
      </button>
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
  return bindActionCreators({ setDuration, setPosition, restartTrack, togglePlaying }, dispatch)
}

export default connect(null, mapDispatchToProps)(Deck);
