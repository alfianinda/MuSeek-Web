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

class EventEdit extends Component {
  state = {
    dateEvent: "",
    duration: "",
    location: ""
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

  handledChangeDate(event) {
    this.setState({
      dateEvent: event.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      dateEvent: this.state.dateEvent,
      duration: this.state.duration,
      location: this.state.location
    };
    const id = this.props.match.params.id;
    this.props.eventEdit(formData, id);
    swal("MuSeek says:", "Event data have been edited", "success");
    await this.props.getEventCustomer();
    this.props.history.push(`/bookedlist=${this.props.profile._id}`);
  };

  render() {
    return (
      <div className="edit-wrapper">
        <div className="container edit">
          <div className="row edit-row">
            <div className="col-12 col-lg-12">
              <h1 className="edit-title">EDIT EVENT</h1>
            </div>
          </div>
          <div className="row edit-row" style={{ justifyContent: "center" }}>
            <div className="col-12 col-lg-6 edit-col-left">
              <form className="edit-form">
                <p className="edit-p">DATE EVENT</p>
                <input
                  style={{ width: "100%" }}
                  className="input-form"
                  type="date"
                  placeholder="EVENT DATE"
                  name="dateEvent"
                  value={this.state.dateEvent}
                  onChange={this.handleChange}
                />
                <p className="edit-p">DURATION (HOURS)</p>
                <input
                  style={{ width: "100%" }}
                  className="input-form"
                  type="number"
                  placeholder="DURATION"
                  name="duration"
                  value={this.state.duration}
                  onChange={this.handleChange}
                />
                <p className="edit-p">LOCATION</p>
                <input
                  style={{ width: "100%" }}
                  className="input-form"
                  type="text"
                  placeholder="EVENT LOCATION"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                />
              </form>
            </div>
          </div>
          <div className="edit-button profil">
            <Link to={`/bookedlist=${this.props.profile._id}`}>
              <button className="btn dstyle-btn btn-profile">
                BACK TO BOOKED LIST
              </button>
            </Link>

            <button
              className="btn dstyle-btn btn-profile"
              onClick={this.handleSubmit}
            >
              SAVED
            </button>
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
