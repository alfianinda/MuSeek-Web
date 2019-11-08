import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/HomePage.scss";
import NewsLetter from "./NewsLetter";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="main-content-wrapper d-flex clearfix">
          <div className="content">
            <div className="dstyle-pro-catagory clearfix flex-home">
              <div className="single-products-catagory clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>List musician with any genre</p>
                    <h4 className="h4">Pop</h4>
                  </div>
                </Link>
              </div>
              <div className="single-products-catagory clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>List mus with any genre</p>
                    <h4 className="h4">Dangdut Digoyang</h4>
                  </div>
                </Link>
              </div>
              <div className="single-products-catagory event clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>Apapun acaranya, museek in aja!</p>
                    <h4 className="h4">Pesta Ulang Tahun</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}
