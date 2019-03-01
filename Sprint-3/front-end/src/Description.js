
import React, { Component } from 'react';
import './styles/main.scss';

export default class Description extends Component {
    
    render() {
        const mainObject = this.props.mainObject;
        return (
            <div>
                <section className="main__container">
                    <h2 className="main__title">{mainObject.title}</h2>
                    <h3 className="main__channel">By {mainObject.channel}</h3>
                    <p className="main__date">12/18/2018</p>
                    <div className="main__icons">
                        <div>
                            <img src="assets/Icons/SVG/Icon-views.svg"  alt="Views Icon"/>
                            <span className="main__views">{mainObject.views}</span>
                        </div>
                        <div>
                            <img src="assets/Icons/SVG/Icon-likes.svg"  alt="Likes Icon"/>
                            <span className="main__likes">{mainObject.likes}</span>
                        </div>
                    </div>
                </section>
                <article className="article__description">
                    <p className="article__info">{mainObject.description}</p>
                </article>
            </div>
        )
    }
}