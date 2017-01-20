import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/fetchTracks'
import { bindActionCreators } from'redux';

function PageButtons(props){

  function handlePageMove(event){
    event.preventDefault()
    var searchTerm = props.searchTerm
    if(searchTerm === ""){ return }
    else {
      if(event.currentTarget.innerHTML === 'Next'){
        props.fetchTracks(searchTerm, props.nextPageToken)
      } else {
        props.fetchTracks(searchTerm, props.prevPageToken)
      }
    }
  }

  var previousButton = <a className="pagination-button" onClick={handlePageMove.bind(props)}>Previous</a>
  if (typeof props.prevPageToken !== 'string'){
    previousButton = <a className="pagination-button" style={{visibility: 'hidden'}} onClick={handlePageMove.bind(props)}>Previous</a>
  }

  return(
    <div id="pagination-buttons">
      {previousButton}
      <a className="pagination-button" onClick={handlePageMove.bind(props)}>Next</a>
    </div>
  )

}

function mapStateToProps(state){
  return {
    searchTerm: state.searchTerm,
    nextPageToken: state.pagination.nextPageToken,
    prevPageToken: state.pagination.prevPageToken
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTracks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageButtons);
