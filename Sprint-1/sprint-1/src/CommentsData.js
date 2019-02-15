import React, { Component } from 'react';
import './main.scss';
import mainObject from './ObjectData';

class CommentPosted extends Component {
    render() {

        let count = 0;
        const newCount = [];
        this.likeHandler = () => {
            console.log("You liked me!!")
            count++;
            console.log(count);
            newCount.push(count);
            // this.span = count;
        }

        return(
            <article className="comments__posted">
                    <img className="posted__img" src="Assets/Images/icons8-rick-sanchez.svg" alt="Profile Image"/>
                    <p className="posted__name">{this.props.name}</p>
                    <p className="posted__date">12/18/2018</p>
                    <p className="posted__comment">{this.props.comment}</p>
                    <div className="button__container">
                        <button className="delete__button">X</button>
                        <div className="like__container">
                            <span className="like__counter">{count}</span>
                            {/* {this.props.likes} */}
                            <button className="like__button" onClick={this.likeHandler}>
                                <img src="Assets/Icons/SVG/thumbs-up.svg" alt="thumbs up" className="like__thumb"/>
                            </button>
                        </div>                  
                    </div>
            </article>
        )
    }
}

export default CommentPosted