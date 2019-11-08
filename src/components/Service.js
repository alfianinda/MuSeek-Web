import React, { Component } from "react";
import "../assets/scss/Service.scss";
import { Link } from "react-router-dom";

class Service extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid service ">
          <div className="service-box">
            <h1 className="display-4 service-heading underline service-heading">
              We've got what you need!
            </h1>
            <p className="service-text">
              For music enthusiast who wants to book a musician and collabs with
              other musician. <span className="service-span">MUseek</span> is a
              tech platform that provide a convenience to use musician’s
              services.
            </p>
            <Link to="/about">
              <button className="btn tombol service-btn">Get Started!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
