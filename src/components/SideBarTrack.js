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

  var title = props.title
  if(title.length > 40){
    title = props.title.split("").splice(0,60).join("") + "..."
  }

  return(
    <li id="sidebar-track">
      <img alt={props.title} src={props.thumbnail} />
      <p>{title}</p>
      <div className="sidebar-track-buttons">
        <button className="default-button" data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleAddToQueue.bind(props)}>Add to Queue</button>
        <button className="default-button" data-deck="1" data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 1</button>
        <button className="default-button" data-deck="2" data-youtubeid={props.youtubeId} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 2</button>
      </div>
    </li>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loadDeck, addToQueue }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarTrack);
