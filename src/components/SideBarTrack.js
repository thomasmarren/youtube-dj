import React from 'react'
import { connect } from 'react-redux'
import { loadDeck } from '../actions/loadDeck'
import { bindActionCreators } from 'redux'

function SideBarTrack(props){

  function handleOnClick(event){
    let data = event.currentTarget.dataset
    props.loadDeck(data.id, data.title, data.deck)
  }

  return(
    <div>
        <li>
          <img alt={props.title} src={props.thumbnail} />
          <br />
          <p>{props.title}</p>
        </li>
      <button data-deck="1" data-id={props.id} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 1</button>
      <button data-deck="2" data-id={props.id} data-title={props.title} onClick={handleOnClick.bind(props)}>Load Deck 2</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loadDeck }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarTrack);
