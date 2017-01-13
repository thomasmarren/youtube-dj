import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/fetchTracks'
import { bindActionCreators } from'redux';

function PageButtons(props){

  function handlePageMove(event){
    event.preventDefault()
    var searchTerm = document.getElementById('search-input').value
    if (searchTerm === ""){
      searchTerm = document.getElementById('search-input').placeholder
    }
    if(event.currentTarget.innerHTML === 'Next'){
      props.fetchTracks(searchTerm, props.nextPageToken)
    } else {
      props.fetchTracks(searchTerm, props.prevPageToken)
    }
  }

  var previousButton = <a className="previous-button" onClick={handlePageMove.bind(props)}>Previous</a>
  if (props.prevPageToken === undefined){
    previousButton = <a className="previous-button" style={{visibility: 'hidden'}} onClick={handlePageMove.bind(props)}>Previous</a>
  }

  return(
    <div>
      {previousButton}
      <a onClick={handlePageMove.bind(props)}>Next</a>
    </div>
  )

}

function mapStateToProps(state){
  return {
    nextPageToken: state.pagination.nextPageToken,
    prevPageToken: state.pagination.prevPageToken
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTracks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageButtons);
