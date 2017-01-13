import React from 'react';
import { connect } from 'react-redux';

function LeftVideo(props){

    let src=`https://www.youtube.com/embed/${props.leftVideo.id}`

    return(
      <div className="left-video eight columns">
        <div className="left-video-video">
          <iframe src={src} />
        </div>
        <br />
        <h3 id="left-video-title">{props.leftVideo.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {leftVideo: state.leftVideo}
}

export default connect(mapStateToProps)(LeftVideo);
