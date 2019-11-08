import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { eventEdit, getEventCustomer } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import swal from "sweetalert";
import propTypes from "prop-types";
import NewsLetter from "./NewsLetter";
import "../assets/scss/ProfileEdit.scss";
import Regencies from "../assets/data/list_of_area/regencies.json";
import Provinces from "../assets/data/list_of_area/provinces.json";

class EventEdit extends Component {
  state = {
    dateEvent: "",
    duration: "",
    loc: [],
    location: "",
    city: "Simeulue",
    province: "Aceh",
    detailLocation: ""
  };

  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    await this.state.loc.push(this.state.detailLocation);
    await this.state.loc.push(this.state.city);
    await this.state.loc.push(this.state.province);
    const loc = this.state.loc.toString();
    await this.setState({ location: loc });
    const formData = {
      dateEvent: this.state.dateEvent,
      duration: this.state.duration,
      location: this.state.location,
      category: this.state.category,
      musicianId: this.state.musicianId
    };
    if (
      formData.dateEvent === "" ||
      formData.duration === "" ||
      formData.location === ""
    ) {
      swal("MuSeek says:", "Please fill all the form input!", "warning");
    } else {
      const id = this.props.match.params.id;
      this.props.eventEdit(formData, id);
      swal("MuSeek says:", "Event data have been edited", "success");
      await this.props.getEventCustomer();
      this.props.history.push(`/bookedlist=${this.props.profile._id}`);
    }
  };

  render() {
    const regencies = Regencies.map(regencie => {
      return (
        <option key={regencie.name} value={regencie.name}>
          {regencie.name}
        </option>
      );
    });
    const provinces = Provinces.map(province => {
      return (
        <option key={province.name} value={province.name}>
          {province.name}
        </option>
      );
    });

    return (
      <div className="book-wrapper">
        <div className="container">
          <div className="r-book-wrapper">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7 p-0">
                <div className="r-col-left">
                  <h2 className="r-book-title">EDIT EVENT</h2>
                  <form className="r-form">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          EVENT DATE
                        </label>
                        <br />
                        <input
                          id="inputState"
                          className="form-control"
                          type="date"
                          name="dateEvent"
                          value={this.state.dateEvent}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          DURATION (HOURS)
                        </label>
                        <input
                          id="inputState"
                          className="form-control"
                          type="number"
                          name="duration"
                          value={this.state.duration}
                          onChange={this.handleChange}
                          placeholder="Duration"
                          min="1"
                          max="10"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }}>CITY</label>
                        <select
                          className="form-control"
                          value={this.state.city}
                          onChange={e =>
                            this.setState({
                              city: e.target.value
                            })
                          }
                        >
                          {regencies}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }}>PROVINCE</label>
                        <select
                          className="form-control"
                          value={this.state.province}
                          onChange={e =>
                            this.setState({
                              province: e.target.value
                            })
                          }
                        >
                          {provinces}
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          DETAIL LOCATION
                        </label>
                        <input
                          id="inputState"
                          className="form-control"
                          type="text"
                          name="detailLocation"
                          value={this.state.detailLocation}
                          onChange={this.handleChange}
                          placeholder="Detail Event Location"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="r-right">
                    <div className="r-right-checkbox"></div>

                    <div className="r-book-btn">
                      <button type="submit" className="btn tombol tombol-book">
                        SAVED
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5 p-0">
                <div className="r-col-right">
                  <div className="r-right-checkbox">
                    <img
                      className="r-form-img"
                      style={{ color: "white" }}
                      src={require("../assets/images/e.png")}
                      alt=""
                    />
                  </div>
                  <div className="r-right-checkbox"></div>
                  <div className="r-book-btn">
                    <button
                      type="submit"
                      className="btn tombol ml-5 mr-2"
                      onClick={this.handleSubmit}
                    >
                      SAVED
                    </button>
                    <Link to={`/bookedlist=${this.props.profile._id}`}>
                      <button type="submit" className="btn tombol">
                        BACK TO BOOKED LIST
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}

EventEdit.propTypes = {
  eventEdit: propTypes.func.isRequired,
  getProfile: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { eventEdit, getProfile, getEventCustomer }
)(withRouter(EventEdit));
