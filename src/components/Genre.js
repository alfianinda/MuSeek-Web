import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/scss/Genre.scss";

export default class Genre extends Component {
  render() {
    return (
      <div className="container-fluid genre">
        <div className="container-fluid p-0 service-genre">
          <div className="row no-gutters genre-row">
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/graduation.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Classical</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/wedding.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Country</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/birthday.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Dangdut</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/summer.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Rock</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/party.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Jazz</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  style={{ height: "auto" }}
                  className="img-fluid"
                  src={require("../assets/images/summer.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Hip-Hop</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
