import React, { Component } from 'react'
import './styles/upload.scss';
import axios from 'axios';

export default class Upload extends Component {

  uploadHandler = (e) => {
    e.preventDefault();
    console.log("Boo!")
    let postUrl = "http://localhost:8080/upload"

    const body = {
      title: e.target.title.value,
      description: e.target.description.value
    }

    console.log(body);

      let config = {
      method: "POST",
      url: postUrl,
      data: body,
      headers: {
        'content-type': 'application/json'
      }};

      console.log(config.data);
      axios(config)
      .then((resp) =>
          console.log(resp))
      .catch((err) =>
          console.log(err))
          
      // this.props.history.push("/")


    e.target.reset();
    }

  render() {
    return (
        <main className="upload">
          <h1 className="upload__title">Upload Video</h1>
          <section className="upload__main">
            <div>
              <p className="upload__thumb">VIDEO THUMBNAIL</p>
              <img className="upload__image" src="assets/Images/Upload-video-preview.jpg" alt="Bike" />
            </div>
            <form className="upload__form" onSubmit={this.uploadHandler}>
              <p className="form__title">TITLE YOUR VIDEO</p>
              <input className="form__box--title" type="text" name="title"
                placeholder="Add a title to your video"></input>
              <p className="form__description">ADD A VIDEO DESCRIPTION</p>
              <textarea className="form__box--description" type="text" name="description" id="descriptionInput" 
                placeholder="Add a description of your video"></textarea>
                <div className="form__buttons">
                  <button type="submit" id="publishButton" value="PUBLISH">PUBLISH</button>
                  <button type="submit" id="cancelButton" value="CANCEL">CANCEL</button>
                </div> 
            </form>
          </section>
          
        </main> 
    )
  }
}
