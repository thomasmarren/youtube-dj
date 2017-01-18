import React from 'react';
import PageButtons from './PageButtons'
import SideBarTrack from './SideBarTrack'
import { connect } from 'react-redux';

function SideBar(props){

  let sideBar = props.tracks.map((track, i) => {
    return <SideBarTrack key={i} youtubeId={track.youtubeId} title={track.title} thumbnail={track.thumbnail}/>
  })

  return(
    <div>
      <div>
        {sideBar}
      </div>
      <PageButtons />
    </div>
  )
}

function mapStateToProps(state){
  return { tracks: state.tracks }
}

export default connect(mapStateToProps)(SideBar);
