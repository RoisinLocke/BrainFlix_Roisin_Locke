import React, { Component } from 'react';
import './styles/NavBar.scss';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav__svg">
                    <Link to="/">
                        <img className="nav__logo" src="assets/Logo/Logo-brainflix.svg" alt="Brainflix Logo"/>
                    </Link>
                </div>
                <input className="nav__search" type="text" name="searchArea" placeholder="Search"></input>
                <Link className="nav__link" to="/upload">
                    <button className="nav__button">
                        <img className="nav__img--upload" src="assets/Icons/SVG/Icon-upload.svg"  alt="Upload Button"/>
                        <p className="nav__button--text">UPLOAD</p>
                    </button>
                </Link>
                <img className="nav__img--profile" src="assets/Images/Mohan-muruge.jpg" alt="User Profile"/>
            </nav>
        )
    }
}



export default NavBar;