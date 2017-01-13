import React, { Component } from 'react';
import Search from './Search'
import LeftDeck from './LeftDeck'
import Mixer from './Mixer'
import RightDeck from './RightDeck'
import SideBar from './SideBar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>YouTube DJ</h2>
        <div className="board row">
          <LeftDeck />
          <Mixer />
          <RightDeck />
        </div>
        <Search />
        <SideBar />
      </div>
    );
  }
}
