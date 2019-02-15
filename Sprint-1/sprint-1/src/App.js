import React, { Component } from 'react';
import './App.scss';
import mainObject from './ObjectData';
import NavBar from './NavBar';
import Main from './Main';
import Aside from './Aside';
import videoCard from './VideoCard';
import videoData from './VideoCardData';

class App extends Component {

  state = {
    videos: videoData,
    mainObject: mainObject
  }

  // constructor() {
  //   super()

  addComment = (e) => {
    const newObject = { ...this.state.mainObject, 
      comments: [...this.state.mainObject.comments, {name: "Paulo Ribeiro", timestamp: Date.now(), comment: e.target.addComment.value} ]};

    this.setState({
      mainObject: newObject
    })
    console.log(newObject);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main submit={this.addComment} mainObject={this.state.mainObject}/>
        <Aside videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;