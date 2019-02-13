import React, { Component } from 'react';
import videoData from './VideoCardData';

class VideoCard extends Component {
    render() {
        return(
            <div className="videoCard">
                <img className="videoCard__img" src="Assets/Images/video-list-0.jpg"></img>
                <div className="videoCard__details">
                    <p className="videoCard__title">Become A Travel Pro In One Step</p>
                    <p className="videoCard__channel">Todd Welch</p>
                </div>
            </div>
        )
    }
}

export default VideoCard;