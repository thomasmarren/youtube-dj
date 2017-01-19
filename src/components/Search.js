import React from 'react';
import { fetchTracks } from '../actions/fetchTracks';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

function Search(props){

  function handleOnSubmit(event){
    event.preventDefault()
    let searchTerm = event.currentTarget.children[0].value
    if(searchTerm === ""){
      searchTerm = document.getElementById("search-input").placeholder
    }
    props.fetchTracks(event.currentTarget.children[0].value)
  }

  return(
    <div id="search">
      <form onSubmit={handleOnSubmit.bind(props)}>
        <input id="search-input" type='text' placeholder="dr dre"/>
        <input className="default-button" type='submit' value="Search" />
      </form>
    </div>
  )

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchTracks: fetchTracks,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
