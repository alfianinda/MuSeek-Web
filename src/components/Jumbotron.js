import React, { Component } from "react";
import "../assets/scss/Jumbotron.scss";

class Jumbotron extends Component {
  refreshState = e => {
    window.location.reload("/signin");
  };
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid frame-one">
          <div className="container">
            <h1 className="display-4 underline jumbo-heading">
              Musician's Best Friend
            </h1>
            <p className="lead jumbo-paragraf">
              place for everyone who wants to book various group of talented
              musicians and a place for musicians to collaboration with other
              musicians
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
