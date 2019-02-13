import React, { Component } from 'react';
import './App.scss';
import comments from './CommentData';
import NavBar from './NavBar';
import Main from './Main';
import Aside from './Aside'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Aside />
      </div>
    );
  }
}

export default App;
