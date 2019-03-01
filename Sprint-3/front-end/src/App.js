import React, { Component } from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
            <Route path="/" exact render={ () => {return <Redirect to="/1af0jruup5gu"/>}} />
            <Route path="/upload" component={Upload} />
            <Route path="/:id" render={(props) => {return <Main {...props} />}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;