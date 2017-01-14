import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setPosition from '../actions/setPosition'

class TrackProgressBar extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let position = event.currentTarget.value
    this.props.setPosition(position, this.props.deck)
  }

  render(){

    return(
      <div>
        <input onChange={this.handleChange} className="track-progress-bar" type="range" min={0} max={this.props.deck.status.duration} value={this.props.deck.status.position} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setPosition }, dispatch)
}

export default connect(null, mapDispatchToProps)(TrackProgressBar);
