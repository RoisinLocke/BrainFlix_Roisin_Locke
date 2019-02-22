import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class VideoCard extends Component {
    render() {
        return(
            <div className="videoCard" >
            <Link to={"/" + this.props.link}>
                <img className="videoCard__img" src={this.props.image}  />
            </Link>
                <div className="videoCard__details">
                    <p className="videoCard__title">{this.props.title}</p>
                    <p className="videoCard__channel">{this.props.channel}</p>
                </div>
            </div>
        )
    }
}

export default VideoCard;