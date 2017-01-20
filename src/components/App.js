import React, { Component } from 'react';
import Mixer from './Mixer'
import Queue from './Queue'
import Search from './Search'
import SideBar from './SideBar'

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <h2 id="logo">The YouTube DJ</h2>
        <Mixer />
        <Queue />
        <div id="search-container">
          <Search />
          <SideBar />
        </div>
      </div>
    );
  }
}
