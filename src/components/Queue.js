import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeFromQueue from '../actions/removeFromQueue'

class Queue extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
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

  render(){

    var list = this.props.queue.tracks.map( (track, i) => {
      return <li
        key={i}
        data-youtubeId={track.youtubeId}
        data-title={track.title}
      >
        {track.title} ___
        <span data-youtubeId={track.youtubeId} onClick={this.handleClick}>X</span>
      </li>
    })

    return(
      <div>
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
  return bindActionCreators({ removeFromQueue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
