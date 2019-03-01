import React, { Component } from 'react';
import './styles/main.scss';
import CommentPosted from './CommentsData';
export default class Comments extends Component {

    render() {
        const newComment = this.props.submit;

        const comments = this.props.comments;

        // const putUrl = `https://local8080/videos/${videoId}`

        // let config = {
        //     method: "PUT",
        //     url: putUrl,
        //     headers: {
        //       'content-type': 'application/json'
        //     }};

        // axios(config)
        //     .then((resp) =>
        //         console.log(resp))
        //     .catch((err) =>
        //         console.log(err))

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
