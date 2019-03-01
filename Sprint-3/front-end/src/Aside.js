import React, { Component } from 'react';
import './styles/aside.scss';
import VideoCard from './VideoCard';

class Aside extends Component {

    render() {

        const videos = this.props.videos;
        const vidList = videos.filter(video => {
            if(this.props.mainObject.id !== video.id){
                return video}})
                .map((video) => <VideoCard title ={video.title}
                    channel={video.channel}
                    image={video.image} 
                    link={video.id}
                    key={video.id}
                    />);

        return(
            <div className="videoAside">
                <h4>NEXT VIDEO</h4>
                {vidList}
            </div>
        )
    }
}

export default Aside;