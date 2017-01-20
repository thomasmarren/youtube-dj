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
        return <tr>
        <td key={i}> {track.title} </td>
        <td data-deck="1" data-youtubeid={track.youtubeId} data-title={track.title} onClick={this.handleLoadDeck}>Load Deck 1</td>
        <td data-deck="2" data-youtubeid={track.youtubeId} data-title={track.title} onClick={this.handleLoadDeck}>Load Deck 2</td>
        <td style={{"color": "red"}} data-youtubeId={track.youtubeId} onClick={this.handleClick}>Remove</td>
        </tr>
      })
    }

    return(
      <div id="queue-container">
        <div id="queue">
          <h2>Queue:</h2>
          <table>
            {list}
          </table>
        </div>
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
