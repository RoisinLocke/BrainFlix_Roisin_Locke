import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav__svg">
                    <img className="nav__logo" src="Assets/Logo/Logo-brainflix.svg" alt="Brainflix Logo"/>
                </div>
                <input className="nav__search" type="text" name="searchArea" placeholder="Search"></input>
                <button className="nav__button"><img className="nav__img--upload" src="Assets/Icons/SVG/Icon-upload.svg"/><h3>UPLOAD</h3></button>
                <img className="nav__img--profile" src="Assets/Images/Mohan-muruge.jpg" alt="Profile Image"/>
            </nav>
        )
    }
}



export default NavBar;