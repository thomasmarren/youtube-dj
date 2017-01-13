import React from 'react';
import PageButtons from './PageButtons'
import SideBarTrack from './SideBarTrack'
import { connect } from 'react-redux';

function SideBar(props){

  let sideBar = props.sideBarTracks.map((sideBarTrack) => {
    return <SideBarTrack id={sideBarTrack.id} title={sideBarTrack.title} thumbnail={sideBarTrack.thumbnail}/>
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
  return { sideBarTracks: state.tracks }
}

export default connect(mapStateToProps)(SideBar);
