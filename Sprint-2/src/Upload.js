import React, { Component } from 'react'
import './upload.scss';

export default class Upload extends Component {
  render() {
    return (
      <main>
          <h1 className="upload__title">Upload Video</h1>
          <p className="upload__thumb">VIDEO THUMBNAIL</p>
          <img className="upload__image" src="assets/Images/Upload-video-preview.jpg" alt="bike picture" />
          <form className="upload__form">
                <p className="form__title">TITLE YOUR VIDEO</p>
                <input className="form__box--title" type="text" name="title"
                    placeholder="Add a title to your video"></input>
                <p className="form__description">ADD A VIDEO DESCRIPTION</p>
                <textarea className="form__box--description" type="text" name="description" id="descriptionInput" 
                    placeholder="Add a description of your video"></textarea>
                <button type="submit" id="publishButton" value="PUBLISH">PUBLISH</button>
                <button type="submit" id="cancelButton" value="CANCEL">CANCEL</button>
          </form>
      </main>
    )
  }
}
