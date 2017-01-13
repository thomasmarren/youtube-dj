import React, { Component } from 'react';
import { connect } from 'react-redux';

class Mixer extends Component {

  render(){

    return(
      <div>
        <h1 id="mixer" className="two columns">MIXER</h1>
        
      </div>
    )
  }
}

function mapStateToProps(state){
}

export default connect(mapStateToProps)(Mixer);
