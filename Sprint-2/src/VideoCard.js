import React, { Component } from 'react';


//componentDidMount 

//when our component is going on the page use this to GET data, then setting STATE to display
//data on the page
class VideoCard extends Component {
    render() {
        return(
            <div className="videoCard">
                <img className="videoCard__img" src={this.props.image} />
                <div className="videoCard__details">
                    <p className="videoCard__title">{this.props.title}</p>
                    <p className="videoCard__channel">{this.props.channel}</p>
                </div>
            </div>
        )
    }
}

export default VideoCard;