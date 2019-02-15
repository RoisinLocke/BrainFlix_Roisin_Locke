import React, { Component } from 'react';
import './main.scss';
import mainObject from './ObjectData';

class CommentPosted extends Component {
    render() {
        return(
            <article className="comments__posted">
                    <img className="posted__img" src="Assets/Images/icons8-rick-sanchez.svg" alt="Profile Image"/>
                    <p className="posted__name">{this.props.name}</p>
                    <p className="posted__date">12/18/2018</p>
                    <p className="posted__comment">{this.props.comment}</p>
            </article>
        )
    }
}

export default CommentPosted