import React from 'react';
import { connect } from 'react-redux';

function RightVideo(props){

    debugger

    let src=`https://www.youtube.com/embed/${props.rightVideo.id}`

    return(
      <div className="right-video eight columns">
        <div className="right-video-video">
          <iframe src={src} />
        </div>
        <br />
        <h3 id="right-video-title">{props.rightVideo.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {rightVideo: state.rightVideo}
}

export default connect(mapStateToProps)(RightVideo);
