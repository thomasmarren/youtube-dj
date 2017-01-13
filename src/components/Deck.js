import React, { Component } from 'react';
import YouTubeVideo from 'stateful-react-youtube'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setPosition from '../actions/setPosition'
import togglePlaying from '../actions/togglePlaying'

class Deck extends Component {

  constructor(props){
    super(props)
    this.state = {
      volume: 100,
      position: 0,
      playing: false
    }
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

    return(
      <div className="five columns">
      <div>
      <h2>{duration}s</h2>
      <YouTubeVideo
        position={this.props.deck.status.position}
        videoId={this.props.deck.track.id}
        playing={this.props.deck.status.playing}
        volume={this.props.deck.status.volume}
        playerVars={{
          controls: 0
        }}

        onProgress={this.handleSetPosition}
      / >
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