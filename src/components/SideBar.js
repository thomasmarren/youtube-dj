import React from 'react';
import PageButtons from './PageButtons'
import SideBarVideo from './SideBarVideo'
import { connect } from 'react-redux';

function SideBar(props){

  let sideBar = props.sideBarVideos.map((sideBarVideo) => {
    return <SideBarVideo id={sideBarVideo.id} title={sideBarVideo.title} thumbnail={sideBarVideo.thumbnail}/>
  })

  return(
    <div className="sidebar four columns">
      <div className="sidebar-videos">
        {sideBar}
      </div>
      <PageButtons />
    </div>
  )
}

function mapStateToProps(state){
  return { sideBarVideos: state.videos }
}

export default connect(mapStateToProps)(SideBar);
