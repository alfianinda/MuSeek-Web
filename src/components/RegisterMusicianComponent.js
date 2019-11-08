import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/actions/authAction";
import swal from "sweetalert";
import propTypes from "prop-types";
import "../assets/scss/RegisterComponent.scss";

class RegisterMusicianComponent extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: "musician"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    this.props.register(formData);
    swal("MuSeek says:", "You have been registered..", "success");
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div>
        <div className="r-regis--wrapper">
          <div className="container">
            <div className="r-regis">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 p-0">
                  <div className="r-col-left">
                    <div className="r-img">
                      <span className="r-regis-span">
                        <i
                          className="fa fa-user-plus"
                          style={{ color: "#1a1a1d" }}
                        ></i>
                      </span>
                    </div>
                    <h2 className="r-h2" style={{ color: "black" }}>
                      musician
                    </h2>
                    <div className="r-regis-btn">
                      <Link to="/registercustomer">
                        <button
                          className="btn tombol signin"
                          style={{ backgroundColor: "#1a1a1d", color: "white" }}
                        >
                          Register as customer
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 p-0">
                  <div className="r-col-right">
                    <div className="r-img">
                      <img
                        className="r-logo"
                        src={require("../assets/images/logo.png")}
                        alt=""
                      />
                    </div>
                    <form className="r-signin--form">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Musician Name</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Musician Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div
                        style={{
                          margin: "1rem 0",
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                        className="form-check"
                      >
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          remember me
                        </label>
                        <Link
                          style={{ fontSize: "1.1rem", color: "white" }}
                          to="/forgotpassword"
                        >
                          forgot password
                        </Link>
                      </div>
                      <div className="r-regis-btn">
                        <button
                          type="submit"
                          className="btn tombol r-regis-btn"
                          onClick={this.handleSubmit}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterMusicianComponent.propTypes = {
  register: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register }
)(withRouter(RegisterMusicianComponent));
