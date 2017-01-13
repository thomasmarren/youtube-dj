import React, { Component } from 'react';
import Search from './Search'
import Mixer from './Mixer'
import SideBar from './SideBar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>YouTube DJ</h2>
        <div className="board row">
          <Mixer />
        </div>
        <Search />
        <SideBar />
      </div>
    );
  }
}
