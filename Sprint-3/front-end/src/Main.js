import React, { Component } from 'react';
import './styles/main.scss';
import CommentPosted from './CommentsData';
import Aside from './Aside';
import axios from 'axios';
import Comments from './Comments';
import Video from './Video';
import Description from './Description';


class Main extends Component {

    state = {
        videos: [],
        mainObject: {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/videos/')
            .then(resp => {
                this.setState({
                    videos: resp.data
                })
          });

        axios.get('http://localhost:8080/videos/1af0jruup5gu')
          .then(resp => {
              this.setState({
                  mainObject: resp.data,
                });
          });      
        }

    componentDidUpdate() {
        console.log(this.props)
        if (this.props.match.params.id !== this.state.mainObject.id) {
            axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
                .then(resp => {
                        this.setState({
                            mainObject: resp.data
                    })
            }
        )}
    }
        
    render() {
        return (
            <article>
                <article className="videoStuff">
                    <Video mainObject={this.state.mainObject}/>
                </article>
            <section className="parent">
                <section className="main">
                    <Description mainObject={this.state.mainObject}/>
                    <Comments comments={this.state.mainObject.comments}/>
                </section> 
                <section className="videos">
                    <Aside videos={this.state.videos} mainObject={this.state.mainObject}/>
                </section>
            </section>
            </article>
        )
    }
}

export default Main;