import React, { Component } from 'react';
import './App.scss';
import mainObject from './ObjectData';
import NavBar from './NavBar';
import Main from './Main';
import Aside from './Aside';
import videoCard from './VideoCard';
import videoData from './VideoCardData';

class App extends Component {
  constructor() {
    super()

    this.state = {
      videos: videoData,
      main: mainObject
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main main={this.state.main}/>
        <Aside videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
