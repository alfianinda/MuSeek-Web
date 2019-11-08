import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { login } from "../store/actions/authAction";
import { connect } from "react-redux";
import swal from "sweetalert";
import Loader from "./Loader";
import "../assets/scss/Signin.scss";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.login();
    }, 2000);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    await this.props.login(formData);
    if (this.props.isAuthenticated) {
      console.log("welcome", this.props.isAuthenticated);
      this.props.history.push("/");
    } else {
      console.log(this.props.isAuthenticated);
      swal("MuSeek says:", "Invalid username or password", "error");
    }
  };
  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div>
        <div className="r-signup--wrapper">
          <div className="container">
            <div className="r-signup">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 p-0">
                  <div className="r-col-left">
                    <div className="r-img">
                      <span className="r-signup-span">
                        <i
                          className="fa fa-user-plus"
                          style={{ color: "#1a1a1d" }}
                        ></i>
                      </span>
                    </div>
                    <h2 className="r-h2" style={{ color: "black" }}>
                      Get accsess to your orders, wishlist and recomendations
                    </h2>
                    <div className="r-signup-btn">
                      <Link to="/signup">
                        <button
                          className="btn tombol signin"
                          style={{ backgroundColor: "#1a1a1d", color: "white" }}
                        >
                          {" "}
                          sign up
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
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
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
                      <div className="r-signup-btn">
                        <button
                          type="submit"
                          className="btn tombol r-signup-btn"
                          onClick={this.handleSubmit}
                        >
                          Sign in
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Signin));
