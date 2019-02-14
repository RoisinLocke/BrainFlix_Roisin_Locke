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
      mainObject: mainObject
    }
  }

  render() {
    console.log('state',this.state.mainObject);
    return (
      <div className="App">
        <NavBar />
        <Main mainObject={this.state.mainObject}/>
        <Aside videos={this.state.videos}/>
        {console.log(this.state.mainObject)}
      </div>
    );
  }
}

export default App;
