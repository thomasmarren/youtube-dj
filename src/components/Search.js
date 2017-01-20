import React, { Component } from 'react';
import { fetchTracks } from '../actions/fetchTracks';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {search: ""}
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event){
    this.setState({search: event.target.value})
  }

  handleOnSubmit(event){
    let searchTerm = this.state.search
    if(searchTerm === ""){
      alert("Please enter a search term")
    }
    this.props.fetchTracks(searchTerm)
  }

  render(){
    return(
      <div id="search">
      <input onChange={this.handleOnChange} id="search-input" type='text' placeholder="Search"/>
      <button onClick={this.handleOnSubmit} className="default-button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTracks }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
