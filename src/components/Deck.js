import React, { Component } from 'react';
import YouTubeVideo from 'stateful-react-youtube'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setDuration from '../actions/setDuration'
import setPosition from '../actions/setPosition'
import togglePlaying from '../actions/togglePlaying'
import restartTrack from '../actions/restartTrack'
import loadDeck from '../actions/loadDeck'
import deckLoaded from '../actions/deckLoaded'
import removeFromQueue from '../actions/removeFromQueue'
import TrackProgressBar from './TrackProgressBar'

class Deck extends Component {

  constructor(props){
    super(props)
    this.handleOnReady = this.handleOnReady.bind(this)
    this.handleSetPosition = this.handleSetPosition.bind(this)
    this.handleSetPositionAutoplay = this.handleSetPositionAutoplay.bind(this)
    this.handleRestartTrack = this.handleRestartTrack.bind(this)
    this.handleTogglePlaying = this.handleTogglePlaying.bind(this)
  }

  handleOnReady({ duration }) {
    this.props.setDuration(duration, this.props.deck)
    this.props.deckLoaded(this.props.deck)
  }

  handleSetPosition(position) {
    this.props.setPosition(position, this.props.deck)
  }

  handleSetPositionAutoplay(position){
    if(!this.props.deck.status.loading && this.props.deck.status.duration < (this.props.deck.status.position + 1000)){
      this.props.togglePlaying(!this.props.deck.status.playing, this.props.deck)
      let nextTrack = this.props.queue.tracks[0]
      this.props.loadDeck(nextTrack.youtubeId, nextTrack.title, this.props.deck.position)
      let youtubeId = nextTrack.youtubeId
      let newQueue = []
      this.props.queue.tracks.forEach( track => {
        if(track.youtubeId !== youtubeId){
          newQueue.push(track)
        }
      })
      this.props.removeFromQueue(newQueue)
    } else if(!this.props.crossFader.fading && this.props.deck.status.position > (this.props.deck.status.duration - 30000)){
      // passed down from Mixer
      this.props.handleAutoplay(this.props.deck)
    }
    this.props.setPosition(position, this.props.deck)
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

    var volume = this.props.deck.status.volume
    if(this.props.deck.crossFader.active){
      volume = Math.floor(((this.props.deck.crossFader.ratio * 2) * .01) * this.props.deck.status.volume)
    }

    var title = this.props.deck.track.title
    if(title.length > 40){
      title = this.props.deck.track.title.split("").splice(0,40).join("") + "..."
    }

    var onProgress = this.handleSetPosition
    if(this.props.queue.autoplay){
      onProgress = this.handleSetPositionAutoplay
    }

    // Styles
    var playButtonClass = this.props.deck.status.playing ? "play-button-active" : "default-button"

    return(
      <div className="deck">
        <div className="track-info">
          <div className="track-title-time">
            <p className="track-title">{title}</p>
            <p className="track-time">{convertElapsedTime(position)}/{convertElapsedTime(duration)}</p>
          </div>
          <TrackProgressBar deck={this.props.deck}/>
        </div>
        <div id="video">
          <YouTubeVideo
            position={this.props.deck.status.position}
            videoId={this.props.deck.track.youtubeId}
            playing={this.props.deck.status.playing}
            volume={volume}
            playerVars={{
              controls: 0,
              showinfo: 0,
              rel: 0
            }}

            onReady={this.handleOnReady}
            onProgress={onProgress}
          / >
        </div>
        <p>Volume: {volume}</p>
        <button className="default-button" onClick={this.handleRestartTrack}>
          <i className="fa fa-fast-backward fa-lg" aria-hidden="true"></i>
        </button>
        <button className={playButtonClass} onClick={this.handleTogglePlaying}>
          <i className="fa fa-play fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    )

    function convertElapsedTime(inputSeconds){
      let seconds = inputSeconds % 60
      if(seconds < 10){ seconds = "0" + seconds}
      let minutes = Math.floor(inputSeconds / 60)
      return minutes + ":" + seconds
    }

  }
}

function mapStateToProps(state){
  return {
    crossFader: state.crossFader,
    queue: state.queue
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setDuration, setPosition, restartTrack, togglePlaying, loadDeck, removeFromQueue, deckLoaded }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
