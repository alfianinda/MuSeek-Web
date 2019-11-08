import React, { Component } from "react";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import { addEvent, getEventCustomer } from "../store/actions/eventAction";
import swal from "sweetalert";
import Regencies from "../assets/data/list_of_area/regencies.json";
import Provinces from "../assets/data/list_of_area/provinces.json";
import NewsLetter from "./NewsLetter";
import "../assets/scss/BookingForm.scss";
import "../assets/scss/BookForm.scss";

class BookForm extends Component {
  state = {
    dateEvent: "",
    duration: "",
    loc: [],
    location: "",
    city: "Simeulue",
    province: "Aceh",
    detailLocation: "",
    category: "Birthday",
    musicianId: this.props.location.state.musicianId,
    eventList: ["Birthday", "Wedding", "Engagement", "Percussion", "Reunion"]
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

    if (localStorage.token == null) {
      return swal(
        "MuSeek says:",
        "Please login as a customer before adding event",
        "info"
      );
    } else {
      if (this.props.profile.role === "musician") {
        return swal(
          "MuSeek says:",
          "Please login as a customer before adding event",
          "info"
        );
      } else {
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
          formData.location === "" ||
          formData.category === "" ||
          formData.musicianId === ""
        ) {
          swal("MuSeek says:", "Please fill all the form input!", "warning");
        } else {
          this.props.addEvent(formData);
          swal("MuSeek says:", "Event booking has been saved", "success");
          await this.props.getEventCustomer(); //biar setelah pindah halaman, langsung reload
          this.props.history.push(`/bookedlist=${this.props.profile._id}`);
        }
      }
    }
  };

  render() {
    console.log(this.state.location);

    const dataList = this.state.eventList.map(event => {
      return (
        <option key={event} value={event}>
          {event}
        </option>
      );
    });

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
                  <h2 className="r-book-title">Add Event</h2>
                  <form className="r-form">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Event Categories
                        </label>
                        <select
                          id="inputState"
                          className="form-control"
                          value={this.state.category}
                          onChange={e =>
                            this.setState({
                              category: e.target.value
                            })
                          }
                        >
                          {dataList}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Event Date
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
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Duration (Hours)
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
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Detail Location
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
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }}>City</label>
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
                        <label style={{ color: "black" }}>Province</label>
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
                  </form>
                  <div className="r-right">
                    <div className="r-right-checkbox"></div>

                    <div className="r-book-btn">
                      <button type="submit" className="btn tombol tombol-book">
                        Add Event
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
                      className="btn tombol"
                      onClick={this.handleSubmit}
                    >
                      Add Event
                    </button>
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

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile, addEvent, getEventCustomer }
)(BookForm);
