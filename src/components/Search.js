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
    <div>
      <form onSubmit={handleOnSubmit.bind(props)}>
        <input id="search-input" type='text' placeholder="dr dre"/>
        <input type='submit' value="Search" />
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
