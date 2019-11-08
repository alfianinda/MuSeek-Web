import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import swal from "sweetalert";
import { logout } from "../store/actions/authAction";

import "../assets/scss/Head.scss";

class Head extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.logout();
    swal("MuSeek says:", "Thank You for Coming MuSeek");
    this.props.history.push("/");
  };

  render() {
    if (!localStorage.token) {
      return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <Link to="/" className="navbar-brand" href="#">
              <img
                className="logo"
                src={require("../assets/images/logo.png")}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto justify-content-center">
                <li className="nav-item active">
                  <Link to="/about" className="nav-link" href="#">
                    About <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/musicianpage" className="nav-link" href="#">
                    Musician List
                  </Link>
                </li>
              </ul>
              <Link className="head-link" to="/signin">
                <div className="r-btn-head">
                  <button className="btn btn-header">sign in</button>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand" href="#">
              <img
                className="logo"
                src={require("../assets/images/logo.png")}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto justify-content-center">
                <li className="nav-item active">
                  <Link to="/about" className="nav-link" href="#">
                    About <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/musicianpage" className="nav-link" href="#">
                    Musician List
                  </Link>
                </li>
                {this.props.profile.role === "customer" ? (
                  <div class="btn-group dropright">
                    <button
                      type="button"
                      class="drop-right btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      profile
                    </button>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" to="/pageprofile">
                        my profile
                      </Link>
                      <Link
                        class="dropdown-item"
                        to={`/bookedlist=${this.props.profile._id}`}
                      >
                        booked list
                      </Link>

                      {/* <div class="dropdown-divider"></div> */}
                      <Link
                        class="dropdown-item"
                        to={`/invoice=${this.props.profile._id}`}
                      >
                        invoice
                      </Link>
                      <Link class="dropdown-item" to="/favorite">
                        favorite
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div class="btn-group dropright">
                    <button
                      type="button"
                      class="drop-right  btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      profile
                    </button>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" to="/pageprofile">
                        my profile
                      </Link>
                    </div>
                  </div>
                )}
              </ul>
              <Link className="head-link" to="/">
                <div className="r-btn-head">
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-header"
                  >
                    sign Out
                  </button>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.authReducer.isAuthenticated,
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { logout, getProfile }
)(withRouter(Head));
