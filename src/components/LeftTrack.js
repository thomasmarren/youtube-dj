import React from 'react';
import { connect } from 'react-redux';

function LeftTrack(props){

    let src=`https://www.youtube.com/embed/${props.leftTrack.id}`

    return(
      <div className="left-track eight columns">
        <div className="left-track-track">
          <iframe src={src} />
        </div>
        <br />
        <h3 id="left-track-title">{props.leftTrack.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {leftTrack: state.leftTrack}
}

export default connect(mapStateToProps)(LeftTrack);
