import React, { Component } from "react";
import "../assets/scss/ForgotPassword.scss";
import { Link } from "react-router-dom";

class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid fp">
          <div className="fp-box">
            <img
              className="fp-img"
              src={require("../assets/images/logo.png")}
              alt=""
            />
            <h1 className="fp-heading">Forgot Your Password? </h1>
            <p style={{ color: "white" }}>
              Enter your email and we will send you a reset form password.
            </p>
          </div>

          <form className="fp-form">
            <input
              className="fp-form-input"
              type="email"
              value=""
              placeholder="type email"
            />
          </form>

          <div className="dstyle-btn-group">
            <Link
              style={{ textTransform: "uppercase" }}
              to={`/forgotpassword`}
              className="btn dstyle-btn btn-profile"
            >
              SEND REQUEST
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
