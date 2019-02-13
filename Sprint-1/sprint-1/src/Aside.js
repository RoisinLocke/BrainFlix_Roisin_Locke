import React, { Component } from 'react';
import './aside.scss';
import VideoCard from './VideoCard';

class Aside extends Component {
    render() {
        return(
            <div className="videoAside">
                <h4>NEXT VIDEO</h4>
                <VideoCard />
            </div>
        )
    }
}

export default Aside;