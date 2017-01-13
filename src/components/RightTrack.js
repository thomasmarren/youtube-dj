import React from 'react';
import { connect } from 'react-redux';

function RightTrack(props){

    let src=`https://www.youtube.com/embed/${props.rightTrack.id}`

    return(
      <div className="right-track eight columns">
        <div className="right-track-track">
          <iframe src={src} />
        </div>
        <br />
        <h3 id="right-track-title">{props.rightTrack.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {rightTrack: state.rightTrack}
}

export default connect(mapStateToProps)(RightTrack);
