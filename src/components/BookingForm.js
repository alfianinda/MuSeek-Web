import React, { Component } from "react";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import { addEvent, getEventCustomer } from "../store/actions/eventAction";
import swal from "sweetalert";
import "../assets/scss/BookingForm.scss";
import NewsLetter from "./NewsLetter";

class BookingForm extends Component {
  state = {
    dateEvent: "",
    duration: "",
    location: "",
    category: "Birthday",
    validationError: "",
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
        const formData = {
          dateEvent: this.state.dateEvent,
          duration: this.state.duration,
          location: this.state.location,
          category: this.state.category,
          musicianId: this.state.musicianId
        };
        this.props.addEvent(formData);
        swal("MuSeek says:", "Event booking has been saved", "success");
        await this.props.getEventCustomer(); //biar setelah pindah halaman, langsung reload
        this.props.history.push(`/bookedlist=${this.props.profile._id}`);
      }
    }
  };

  render() {
    console.log(this.props.location);

    const dataList = this.state.eventList.map(event => {
      return (
        <option key={event} value={event}>
          {event}
        </option>
      );
    });

    return (
      <div>
        <div className="container edit main-footer">
          <div className="row edit-row" style={{ justifyContent: "center" }}>
            <div className="col-12 col-lg-12">
              <h1 className="edit-title">ADD EVENT</h1>
            </div>
            <div className="col-12 col-lg-4">
              <form className="edit-form">
                <p className="edit-p">EVENT CATEGORIES</p>
                <select
                  className="input-form form"
                  value={this.state.category}
                  onChange={e =>
                    this.setState({
                      category: e.target.value,
                      validationError:
                        e.target.value === "" ? "You must select event" : ""
                    })
                  }
                >
                  {dataList}
                </select>
                <p className="edit-p">EVENT DATE</p>
                <input
                  type="date"
                  className="input-form form"
                  name="dateEvent"
                  value={this.state.dateEvent}
                  onChange={this.handleChange}
                  placeholder="EVENT DATE"
                />
              </form>
            </div>
            <div className="col-12 col-lg-4 respon-top">
              <form className="edit-form">
                <p className="edit-p">DURATION (HOURS)</p>
                <input
                  type="number"
                  className="input-form form"
                  name="duration"
                  value={this.state.duration}
                  onChange={this.handleChange}
                  placeholder="DURATION"
                />
                <p className="edit-p">LOCATION</p>
                <input
                  type="text"
                  className="input-form form"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  placeholder="LOCATION"
                />
              </form>
            </div>
          </div>

          <div className="edit-button">
            <button
              className="btn dstyle-btn btn-profile book"
              onClick={this.handleSubmit}
            >
              ADD EVENT
            </button>
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
)(BookingForm);
