import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeFromQueue from '../actions/removeFromQueue'
import loadDeck from '../actions/loadDeck'

class Queue extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleLoadDeck = this.handleLoadDeck.bind(this)
  }

  handleClick(event){
    let youtubeId = event.currentTarget.dataset.youtubeid
    let newQueue = []
    this.props.queue.tracks.forEach( track => {
      if(track.youtubeId !== youtubeId){
        newQueue.push(track)
      }
    })
    this.props.removeFromQueue(newQueue)
  }

  handleLoadDeck(event){
    let data = event.currentTarget.dataset
    this.props.loadDeck(data.youtubeid, data.title, data.deck)
    let youtubeId = data.youtubeid
    let newQueue = []
    this.props.queue.tracks.forEach( track => {
      if(track.youtubeId !== youtubeId){
        newQueue.push(track)
      }
    })
    this.props.removeFromQueue(newQueue)
  }

  render(){

    var list
    if(this.props.queue.tracks.length === 0){
      list = "Queue empty"
    } else {
      list = this.props.queue.tracks.map( (track, i) => {
        return <li
        key={i}
        data-youtubeId={track.youtubeId}
        data-title={track.title}
        >
        {track.title}
        <button className="default-button" data-deck="1" data-youtubeid={track.youtubeId} data-title={track.title} onClick={this.handleLoadDeck}>Load Deck 1</button>
        <button className="default-button" data-deck="2" data-youtubeid={track.youtubeId} data-title={track.title} onClick={this.handleLoadDeck}>Load Deck 2</button>
        <span style={{"margin-left": "10px", "color": "red", "cursor": "pointer"}} data-youtubeId={track.youtubeId} onClick={this.handleClick}>
        <i className="fa fa-times fa-lrg" aria-hidden="true"></i>
        </span>
        </li>
      })
    }

    return(
      <div id="queue">
      <h2>Queue:</h2>
      <ul>
        {list}
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {queue: state.queue}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ removeFromQueue, loadDeck }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
