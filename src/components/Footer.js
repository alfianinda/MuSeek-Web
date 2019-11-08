import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container footer-box">
          <div className="row footer-row">
            <div className="col-12 col-lg-3 footer-col">
              <img
                className="footer-logo-1"
                src={require("../assets/images/logo.png")}
                alt="logo"
              />
            </div>

            <div className="col-12 col-lg-3 footer-col">
              <h4 className="footer-title">About Museek</h4>
              <ul className="list-unstyled">
                <li className="footer-li">
                  <Link className="footer-a" to="/about">
                    About
                  </Link>
                </li>
                <li className="footer-li">
                  <Link className="footer-a" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer-li">
                  <Link className="footer-a" to="#">
                    Genre{" "}
                  </Link>
                </li>
                <li className="footer-li">
                  <Link className="footer-a" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3 footer-col">
              <h4 className="footer-title">Follow Us</h4>
              <ul className="list-unstyled">
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-instagram"></i>
                  </span>
                  <Link className="footer-a" href="a">
                    Instagram
                  </Link>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-facebook-square"></i>
                  </span>
                  <Link className="footer-a" href="a">
                    facebook
                  </Link>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-twitter-square"></i>
                  </span>
                  <Link className="footer-a" href="a">
                    twitter
                  </Link>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-youtube"></i>
                  </span>
                  <Link className="footer-a" href="a">
                    youtube
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3 footer-col">
              <h4 className="footer-title">Download</h4>
              <div className="footer-img-download">
                <div>
                  <img
                    className="footer-logo"
                    src={require("../assets/images/gplay.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="footer-logo"
                    src={require("../assets/images/appstore.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-xs-center ">
            &copy;{new Date().getFullYear()} Museek - All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
