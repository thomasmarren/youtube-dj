import React from 'react'
import { connect } from 'react-redux'
import { loadLeftTrack } from '../actions/loadLeftTrack'
import { loadRightTrack } from '../actions/loadRightTrack'
import { bindActionCreators } from'redux'

function SideBarTrack(props){

  function handleOnClick(event){
    let data = event.currentTarget.dataset
    if(data.deck === "one"){
      props.loadLeftTrack(data.id, data.title)
    } else {
      props.loadRightTrack(data.id, data.title)
    }
  }

  return(
    <div className="sidebar-track">

        <li className="list-group-item">
          <img alt={props.title} src={props.thumbnail} />
          <br />
          <p>{props.title}</p>
        </li>
      <button data-deck="one" data-id={props.id} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 1</button>
      <button data-deck="two" data-id={props.id} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 2</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loadLeftTrack, loadRightTrack }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarTrack);
