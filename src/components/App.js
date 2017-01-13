import React, { Component } from 'react';
import Search from './Search'
import LeftTrack from './LeftTrack'
import RightTrack from './RightTrack'
import SideBar from './SideBar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>YouTube DJ</h2>
        <LeftTrack />
        <RightTrack />
        <Search />
        <SideBar />
      </div>
    );
  }
}
