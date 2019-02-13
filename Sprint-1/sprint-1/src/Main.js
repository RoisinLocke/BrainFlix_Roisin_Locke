import React, { Component } from 'react';
import './main.scss';
import comments from './CommentData';
import videoData from './VideoCardData';

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
    render() {
        return (
            <video className="main__video" src="Assets/Video/BrainStation Sample Video.mp4" type="mp4" controls>
            </video>
        )
    }
}

class Description extends Component {
    render() {
        return (
            <div>
                <section className="main__container">
                    <h2 className="main__title">BMX Rampage: 2018 Highlights</h2>
                    <h3 className="main__channel">By Red Cow</h3>
                    <p className="main__date">12/18/2018</p>
                    <div className="main__icons">
                        <div>
                            <img src="Assets/Icons/SVG/Icon-views.svg" />
                            <span className="main__views">1,001,023</span>
                        </div>
                        <div>
                            <img src="Assets/Icons/SVG/Icon-likes.svg" />
                            <span className="main__likes">110,985</span>
                        </div>
                    </div>
                </section>
                <article className="article__description">
                    <p> On a gusty day in Southern Utah, a group of 25 daring 
                        mountain bikers blew the doors off what is possible on 
                        two wheels, unleashing some of the biggest moments the 
                        sport has ever seen. While mother nature only allowed 
                        for one full run before the conditions made it impossible 
                        to ride, that was all that was needed for event veteran 
                        Kyle Strait, who won the event for the second time -- eight 
                        years after his first Red Cow Rampage title.
                    </p>
                </article>
            </div>
        )
    }
}

class Comments extends Component {
    render() {
        const displayedComments = [];
        for(let i = 0; i<this.props.length; i++) {
            let comments = <Comments name={this.props[i].name}
                            comment={this.props[i].comment} />
            displayedComments.push(comments);
        }
        return (
            <div>
                <h2 className="comments__title">3 Comments</h2>
                {/* {displayedComments} */}
                <div className="comments__container">
                <div className="comments__image">
                    <img className="comments__img" src="./Assets/Images/Mohan-muruge.jpg" alt="Profile Image" />
                </div>
                <div className="comments__section">
                    <form id="comment__form">
                        <p className="comment__p">JOIN THE CONVERSATION</p>
                        <textarea className="comment__box" type="text" name="commentArea" id="commentInput" placeholder="Add a new comment" required></textarea>
                        <input type="submit" id="commentButton" value="COMMENT"/>
                    </form>
                </div>
                </div>
                <article className="comments__posted">
                    <img className="posted__img" src="" alt=""/>
                    <p className="posted__name">{this.props.name}</p>
                    <p className="posted__date">12/18/2018</p>
                    <p className="posted__comment">{this.props.comment}</p>
                </article>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <>
                <Video />
                <Description />
                <Comments />
            </>
        )
    }
}





export default Main;