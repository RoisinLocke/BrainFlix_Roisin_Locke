import React, { Component } from 'react';
import './main.scss';
import CommentPosted from './CommentsData';
import Aside from './Aside';
import axios from 'axios';

class Video extends Component {

    playHandler = () => {
        this.refs.videoRef.paused ? this.refs.videoRef.play() : this.refs.videoRef.pause();
    }

    render() {
        return (
            <div className="video">
                <video ref="videoRef" poster={this.props.mainObject.image} className="main__video" src="Assets/Video/BrainStation Sample Video.mp4" type="mp4">
                </video>
                <div className="video__controls">
                    <div className="video__playPauseButton"></div>
                    <button className="video__play" type="button" data-state="play" onClick={this.playHandler}><img className="video__play--svg" src="Assets/Icons/SVG/Icon-play.svg" alt="Play Button"/></button>
                    {/* <button className="video__pause" type="button" data-state="pause" onClick={this.pauseHandler}><img className="video__pause--svg" src="Assets/Icons/SVG/Icon-pause.svg"/> </button> */}
                    <div className="video__progressContainer"></div>
                    <div className="video__progress"></div>
                    <span className="video__progressBar">0:00/0:42</span>
                    <div className="video__vol"></div>
                    <button className="video__fullscreen" type="button" data-state="go-fullscreen"><img src="Assets/Icons/SVG/Icon-fullscreen.svg"  alt="Fullscreen Button"/></button>
                    <button className="video__volume" type="button" data-state="vol"><img src="Assets/Icons/SVG/Icon-volume.svg" alt="Volume Button"/></button>
                </div>
            </div>
        )
    }
}

class Description extends Component {
    
    render() {
        const mainObject = this.props.mainObject;
        return (
            <div>
                <section className="main__container">
                    <h2 className="main__title">{mainObject.title}</h2>
                    <h3 className="main__channel">By {mainObject.channel}</h3>
                    <p className="main__date">12/18/2018</p>
                    <div className="main__icons">
                        <div>
                            <img src="assets/Icons/SVG/Icon-views.svg"  alt="Views Icon"/>
                            <span className="main__views">{mainObject.views}</span>
                        </div>
                        <div>
                            <img src="assets/Icons/SVG/Icon-likes.svg"  alt="Likes Icon"/>
                            <span className="main__likes">{mainObject.likes}</span>
                        </div>
                    </div>
                </section>
                <article className="article__description">
                    <p className="article__info">{mainObject.description}</p>
                </article>
            </div>
        )
    }
}

class Comments extends Component {

    render() {
        const newComment = this.props.submit;

        const comments = this.props.comments;
        let commentsJSX = [];
        for(let i = 0; i < comments.length; i++) {
            commentsJSX.push(<CommentPosted name={comments[i].name}
                timestamp={comments[i].timestamp}
                comment={comments[i].comment} 
                key={i}
                />);  }
        
        return (
            <div className="comments">
                <h2 className="comments__title">3 Comments</h2>
                <div className="comments__container">
                <div className="comments__image">
                    <img className="comments__img" src="./Assets/Images/Mohan-muruge.jpg" alt="User Profile" />
                </div>
                <div className="comments__section">
                    <form onSubmit={newComment} id="comment__form" >
                        <p className="comment__p">JOIN THE CONVERSATION</p>
                        <textarea className="comment__box" type="text" name="addComment" id="commentInput" placeholder="Add your comment..."></textarea>
                        <input type="submit" id="commentButton" value="COMMENT" />
                    </form>
                </div>
                </div>
                {commentsJSX}
             </div>
        )
    
}
}

class Main extends Component {

    state = {
        videos: [],
        mainObject: {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=roisinlocke')
            .then(resp => {
                this.setState({
                    videos: resp.data
                })
          });

        axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=roisinlocke')
          .then(resp => {
            this.setState({
              mainObject: resp.data,
            });
          });      
        }

    componentDidUpdate() {
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=roisinlocke`)
            .then(resp => {
                if (this.props.match.params.id !== this.state.mainObject.id){
                        this.setState({
                            mainObject: resp.data
                    })
            }
        })
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