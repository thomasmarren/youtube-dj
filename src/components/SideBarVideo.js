import React from 'react'
import { connect } from 'react-redux'
import { loadLeftVideo } from '../actions/loadLeftVideo'
import { bindActionCreators } from'redux'

function SideBarVideo(props){

  function handleOnClick(event){
    event.preventDefault()
    let data = event.currentTarget.dataset
    props.loadLeftVideo(data.id, data.title)
  }

  return(
    <div className="sidebar-video">
      <a data-id={props.id} data-title={props.title} onClick={handleOnClick.bind(props)}>
        <li className="list-group-item">
          <img alt={props.title} src={props.thumbnail} />
          <br />
          <p>{props.title}</p>
        </li>
      </a>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loadLeftVideo }, dispatch)
}

export default connect(null, mapDispatchToProps)(SideBarVideo);
