import React from 'react';
import { fetchTracks } from '../actions/fetchTracks';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

function Search(props){

  function handleOnSubmit(event){
    event.preventDefault()
    props.fetchTracks(event.currentTarget.children[0].value)
  }

  return(
    <div className="search-container">
      <form onSubmit={handleOnSubmit.bind(props)}>
        <input id="search-input" type='text' className="search-bar" placeholder="90s Hip Hop"/>
        <input className="button-primary" type='submit' value="Search" />
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
