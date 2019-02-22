import React, { Component } from 'react';
import './aside.scss';
import VideoCard from './VideoCard';
import axios from 'axios';

class Aside extends Component {

    render() {

        const videos = this.props.videos;
        let videoJSX =[];
        for(let i = 0; i < videos.length; i++) {
        videoJSX.push(<VideoCard title ={videos[i].title}
                    channel={videos[i].channel}
                    image={videos[i].image} 
                    key={videos[i].id}
                    />);
        }

        return(
            <div className="videoAside">
                <h4>NEXT VIDEO</h4>
                {videoJSX}
            </div>
        )
    }
}

export default Aside;