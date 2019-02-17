import React, { Component } from 'react';
import './main.scss';

class CommentPosted extends Component {

    state={
        count: 0
    }

    render() {
        this.likeHandler = () => {
            console.log("You liked me!!")
            this.setState({
               count: this.state.count += 1

            })
        }

        let ts = this.props.timestamp
        function date(timestamp) {
            let todaysDate = new Date (timestamp);
            let day = todaysDate.getDate();
            let month = todaysDate.getMonth() +1;
            let year = todaysDate.getFullYear();
            console.log(day, month, year);
            
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }
        
            return month + "/" + day + "/" + year;
        }

        return(
            <article className="comments__posted">
                    <img className="posted__img" src="Assets/Images/icons8-rick-sanchez.svg" alt="Profile Image"/>
                    
                        <p className="posted__name">{this.props.name}</p>
                        <p className="posted__date">{date(ts)}</p>
                    
                    <p className="posted__comment">{this.props.comment}</p>
                    <div className="button__container">
                        <button className="delete__button">X</button>
                        <div className="like__container">
                            <span className="like__counter">{this.state.count}</span>
                            {/* {this.props.likes} */}
                            <button className="like__button" onClick={this.likeHandler}>
                                <img src="Assets/Icons/SVG/thumbs-up.svg" alt="thumbs up" className="like__thumb"/>
                            </button>
                        </div>                  
                    </div>
            </article>
        )
    }
}

export default CommentPosted