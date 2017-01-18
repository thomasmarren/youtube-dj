import React from 'react'
import { connect } from 'react-redux'
import loadDeck from '../actions/loadDeck'
import addToQueue from '../actions/addToQueue'
import { bindActionCreators } from 'redux'

function SideBarTrack(props){

  function handleOnClick(event){
    let data = event.currentTarget.dataset
    props.loadDeck(data.youtubeid, data.title, data.deck)
  }

  function handleAddToQueue(event){
    let data = event.currentTarget.dataset
    props.addToQueue(data.youtubeid, data.title)
  }

  return(
    <div>
        <li>
          <img alt={props.title} src={props.thumbnail} />
          <br />
          <p>{props.title}</p>
        </li>
      <button data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleAddToQueue.bind(props)}>Add to Queue</button>
      <button data-deck="1" data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 1</button>
      <button data-deck="2" data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 2</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loadDeck, addToQueue }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarTrack);
