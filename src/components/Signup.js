import React, { Component } from "react";
import "../assets/scss/Signup.scss";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid signup-container">
          <div className="row signup-row">
            <div className="col-12 col-lg-6 signup-col-left">
              <h1 className="signup-h1"> as customer</h1>
              <div className="signup-box">
                <img
                  className="signup-img"
                  src={require("../assets/images/customer.png")}
                  alt=""
                />
                <Link to="/registercustomer">
                  <button className="btn tombol signup-btn">
                    Signup as costumer
                  </button>
                </Link>
                <div className="signup-message">
                  <p className="signup--message__p" style={{ color: "white" }}>
                    Already have account?{" "}
                  </p>
                  <Link to="/signin">
                    <p style={{ color: "white" }}>login here</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 signup-col-right">
              <h1 className="signup-h1">as musician</h1>
              <div className="signup-box">
                <img
                  className="signup-img"
                  src={require("../assets/images/customer.png")}
                  alt=""
                />
                <Link to="/registermusician">
                  <button className="btn tombol signup-btn">
                    Signup as musician
                  </button>
                </Link>
                <div className="signup-message">
                  <p className="signup--message__p" style={{ color: "black" }}>
                    Already have account?{" "}
                  </p>
                  <Link to="/signin">
                    <p style={{ color: "black" }}>login here</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="signup-little">
              <button className="btn tombol"> go home</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
