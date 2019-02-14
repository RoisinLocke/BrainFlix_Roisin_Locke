import React, { Component } from 'react';
import './aside.scss';
import VideoCard from './VideoCard';

class Aside extends Component {
    render() {

        const videos = this.props.videos;
        let videoJSX =[];
        for(let i = 0; i < videos.length; i++) {
        videoJSX.push(<VideoCard title ={videos[i].title}
                    channel={videos[i].channel}
                    image={videos[i].image} 
                    key={videos[i.id]}
                    />);
        }

        return(
            <div className="videoAside">
                <h4>NEXT VIDEO</h4>
                {videoJSX}

                {/* {videos.map(video => <VideoCard title ={videos[i].title}
                                                channel={videos[i].channel}
                                                image={video[i].image} 
                                                key={video[i.id]}/>)} */}
            </div>
        )
    }
}

export default Aside;