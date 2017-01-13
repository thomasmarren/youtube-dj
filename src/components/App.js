import React, { Component } from 'react';
import Search from './Search'
import LeftVideo from './LeftVideo'
import RightVideo from './RightVideo'
import SideBar from './SideBar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>YouTube DJ</h2>
        <LeftVideo />
        <RightVideo />
        <Search />
        <SideBar />
      </div>
    );
  }
}
