import React, { Component } from 'react';
import './App.scss';
import mainObject from './ObjectData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import videoData from './VideoCardData';
import Upload from './Upload';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      mainObject: {
        comments: []
      }
    }
  }

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
      <Router>
        {/* <Main submit={this.addComment} mainObject={this.state.mainObject} videos={this.state.videos}/> */}
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/upload" component={Upload} />
          </Switch>
          {/* <CommentList comments={this.state.comments} */}
        </div>
      </Router>
    );
  }
}

export default App;