import React, { Component } from "react";

import "../assets/scss/VerificationEmail.scss";

class VerificationEmail extends Component {
  render() {
    return (
      <div>
        <div className="container ver">
          <div className="ver-title">
            <img
              className="ver-logo"
              src={require("../assets/images/logo.png")}
              alt=""
            />
          </div>
          <div className="ver-content">
            <h1 className="ver-h1">Welcome To the MUseek</h1>
            <h2 className="ver-h2 underline">
              Hi Jhon, your registration is complited !
            </h2>
            <p className="ver-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <button className="btn tombol ver-btn">Confirm registration</button>
          </div>
          <div className="ver-little">
            <a href="a">GENERAL QUESTION</a>
            <a href="a">TERMS AND CONDITION</a>
            <div className="ver-fa">
              <a href="a">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="a">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="a">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="ver-bottom">
            <p className="text-xs-center ">
              &copy;{new Date().getFullYear()} Museek - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VerificationEmail;
