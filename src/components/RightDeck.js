import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTubeVideo from 'stateful-react-youtube'

class RightDeck extends Component {

  constructor(props){
    super(props)
    this.state = {
      volume: 100,
      position: 0,
      playing: false,
      duration: 0
    }
    this.handleOnReady = this.handleOnReady.bind(this);
    this.onPlayingChange = this.onPlayingChange.bind(this);
    this.setPosition = this.setPosition.bind(this)
    this.togglePlaying = this.togglePlaying.bind(this)
  }

  onPlayingChange(playing) {
    this.setState({playing});
  }

  handleOnReady({ duration }) {
    this.setState({duration});
  }

  togglePlaying(){
    this.setState({playing: !this.state.playing})
  }

  setPosition(position) {
    this.setState({position});
  }

  render(){

    return(
      <div className="five columns">
      <div>
      <h1>{this.props.rightDeck.track.title}</h1>
      <YouTubeVideo
        position={this.state.position}
        videoId={this.props.rightDeck.track.id}
        playing={this.state.playing}
        volume={this.state.volume}
        playerVars={{
          controls: 0
        }}

        onReady={this.handleOnReady}
        onPlayingChange={this.onPlayingChange}
        onProgress={this.setPosition}
      / >
      <button onClick={this.togglePlaying}>
        {this.state.playing ? "Pause" : "Play"}
      </button>
      </div>
      <br />
      <h3>{this.props.rightDeck.track.title}</h3>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {rightDeck: state.rightDeck}
}

export default connect(mapStateToProps)(RightDeck);
