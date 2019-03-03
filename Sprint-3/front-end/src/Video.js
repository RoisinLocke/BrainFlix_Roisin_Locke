import React, { Component } from 'react';
import './styles/main.scss';

export default class Video extends Component {

    state ={
        isPlaying: false
    }

    playHandler = () => {
        this.refs.videoRef.paused ? this.refs.videoRef.play() : this.refs.videoRef.pause();
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    render() {
        const playImg = "assets/Icons/SVG/Icon-play.svg";
        const pauseImg = "assets/Icons/SVG/Icon-pause.svg";
        let url = this.props.mainObject.video + '?api_key=roisinlocke'

        return (
            <div className="video">
                <video ref="videoRef" poster={this.props.mainObject.image} className="main__video" src={url} type="mp4">
                </video>
                <div className="video__controls">
                    <div className="video__playPauseButton"></div>
                    <button className="video__playPause" type="button" onClick={this.playHandler} >
                        <img className="video__play--svg" src={this.state.isPlaying ? pauseImg : playImg} alt="Play/Pause Button"/>
                    </button>
                    <div className="video__progressContainer"></div>
                    <div className="video__progress"></div>
                    <span className="video__progressBar">0:00/0:42</span>
                    <div className="video__vol"></div>
                    <img className="video__fullscreen" src="assets/Icons/SVG/Icon-fullscreen.svg"  alt="Fullscreen Button"/>
                    <img className="video__volume" src="Assets/Icons/SVG/Icon-volume.svg" alt="Volume Button"/>
                </div>
            </div>
        )
    }
}