import React from 'react'
import { connect } from 'react-redux'
import { loadLeftDeck } from '../actions/loadLeftDeck'
import { loadRightDeck } from '../actions/loadRightDeck'
import { bindActionCreators } from'redux'

function SideBarTrack(props){

  function handleOnClick(event){
    let data = event.currentTarget.dataset
    if(data.deck === "one"){
      props.loadLeftDeck(data.id, data.title)
    } else {
      props.loadRightDeck(data.id, data.title)
    }
  }

  return(
    <div>
        <li>
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
  return bindActionCreators({ loadLeftDeck, loadRightDeck }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarTrack);
