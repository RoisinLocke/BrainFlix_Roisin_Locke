import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import Upload from './Upload';

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
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact render={(props) => {return <Main {...props} />}}/>
            <Route path="/upload" component={Upload} />
            <Route path="/:id" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;