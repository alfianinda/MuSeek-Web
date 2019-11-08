import React, { Component } from "react";
import "../assets/scss/Logout.scss";
import { Link } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid logout">
          <div className="container logout-box">
            <h1 className="display-4 underline logout-heading">
              You Already Logout
            </h1>
            <p className="lead logout-p">
              Thank You for using <span className="logout-span">MUseek</span>.
              You Have Been Logout. To Login to this site Again, click here to
              going back
            </p>
            <Link to="/">
              <button className="btn tombol logout-btn">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;
