import React, { Component } from 'react';
import './main.scss';
// import mainObject from './ObjectData';
import CommentPosted from './CommentsData';

//in Main we will need video (with possibiltiy to change later)
//title & decription with possibility to change later
//dynamic comments section

//in state we have an array of comments
//we can add, delete, like, edit text - these are how they can change
//create state modifying method for each
//remember - must use this.setState() to change data
//use onClicks and others to hook up state modifying methods to the elements
//that should trigger them

class Video extends Component {

    clickHandler = () => {
        console.log("You clicked!!")
    //     if ( button === "video__play") {
    //         if (this.paused || this.ended) {
    //             this.setAttribute('data-state', 'play');
    //         }
    //         else {
    //             this.setAttribute('data-state', 'pause');
    //         }
    //     }
    }

    render() {
        return (
            <figure className="video">
                <video poster="Assets/Images/video-list-0.jpg" className="main__video" src="Assets/Video/BrainStation Sample Video.mp4" type="mp4">
                </video>
                <div className="video__controls">
                    <button className="video__play" type="button" data-state="play" onClick={this.clickHandler}></button>
                        <img className="video__play--svg" src="Assets/Icons/SVG/Icon-play.svg"/>
                    <div className="video__progressContainer"></div>
                    <div className="video__progress">
                        {/* <span className="video__progressBar"></span> */}
                        </div>
                    <div className="video__vol"></div>
                        <button className="video__fullscreen" type="button" data-state="go-fullscreen"><img src="Assets/Icons/SVG/Icon-fullscreen.svg"/></button>
                        <button className="video__volume" type="button" data-state="vol"><img src="Assets/Icons/SVG/Icon-volume.svg"/></button>
                </div>
            </figure>
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
                    <h3 className="main__channel">{mainObject.channel}</h3>
                    <p className="main__date">12/18/2018</p>
                    <div className="main__icons">
                        <div>
                            <img src="Assets/Icons/SVG/Icon-views.svg" />
                            <span className="main__views">{mainObject.views}</span>
                        </div>
                        <div>
                            <img src="Assets/Icons/SVG/Icon-likes.svg" />
                            <span className="main__likes">{mainObject.likes}</span>
                        </div>
                    </div>
                </section>
                <article className="article__description">
                    <p>{mainObject.description}</p>
                </article>
            </div>
        )
    }
}

class Comments extends Component {
    render() {
        
        const comments = this.props.mainObject.comments;
        let commentsJSX = [];
        for(let i = 0; i < comments.length; i++) {
            
            commentsJSX.push(<CommentPosted name={comments[i].name}
                comment={comments[i].comment} 
                key={i}
                />);  }
        
        return (
            <div>
                <h2 className="comments__title">3 Comments</h2>
                <div className="comments__container">
                <div className="comments__image">
                    <img className="comments__img" src="./Assets/Images/Mohan-muruge.jpg" alt="Profile Image" />
                </div>
                <div className="comments__section">
                    <form id="comment__form">
                        <p className="comment__p">JOIN THE CONVERSATION</p>
                        <textarea className="comment__box" type="text" name="commentArea" id="commentInput" placeholder="Add your comment..." required></textarea>
                        <input type="submit" id="commentButton" value="COMMENT"/>
                    </form>
                </div>
                </div>
                {commentsJSX}
             </div>
        )
    }
}



class Main extends Component {
    render() {
        return (
            <>
                <Video />
                <Description mainObject={this.props.mainObject}/>
                <Comments mainObject={this.props.mainObject}/> 
            </>
        )
    }
}

export default Main;