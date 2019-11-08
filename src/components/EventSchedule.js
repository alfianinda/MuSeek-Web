import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import {
  getEventMusician,
  acceptEvent,
  rejectEvent
} from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import Rupiah from "./Rupiah";
import "../assets/scss/BookedList.scss";

class EventSchedule extends Component {
  state = {
    status: "accepted",
    status2: "rejected"
  };

  componentDidMount = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    console.log(id);
    await this.props.getEventMusician(id);
    this.props.getProfile();
  };

  handleSubmitAccept = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      status: this.state.status
    };

    await this.props.acceptEvent(formData, id);

    this.props.getEventMusician(this.props.profile._id);
  };

  handleSubmitReject = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      status: this.state.status2
    };

    await this.props.rejectEvent(formData, id);

    this.props.getEventMusician(this.props.profile._id);
  };

  render() {
    const eventList = this.props.event.map(schedule => {
      return (
        <tr>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>{schedule.customerId.name}</span>
          </td>
          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{schedule.category}</span>
          </td>
          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{new Date(schedule.dateEvent).toLocaleDateString()}</span>
          </td>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>
              Rp{" "}
              {schedule.musicianId.price && Rupiah(schedule.musicianId.price)}
              ,00
            </span>
          </td>

          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{schedule.status}</span>
          </td>
          <td className="font-cart">
            <span className="button-action">
              {" "}
              <div className="dstyle-btn-group">
                <Link
                  to={`/eventdetail/${schedule._id}`}
                  className="button-edit"
                >
                  <i class="fa fa-info"></i>
                </Link>
              </div>
              <div className="dstyle-btn-group">
                <Link to="#" className="button-edit">
                  <i
                    class="fa fa-check"
                    onClick={() => this.handleSubmitAccept(schedule._id)}
                  ></i>
                </Link>
              </div>
              <div className="dstyle-btn-group">
                <Link to="#" className="button-edit">
                  <i
                    className="fa fa-close"
                    onClick={() => this.handleSubmitReject(schedule._id)}
                  ></i>
                </Link>
              </div>
            </span>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <span>
          <div className="main-content-wrapper d-flex clearfix">
            <div className="cart-table-area bookedlist">
              <div className="container-fluid">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12 col-lg-8">
                    <div className="cart-title">
                      <h2
                        style={{
                          textAlign: "center",
                          textTransform: "uppercase"
                        }}
                      >
                        EVENT SCHEDULE
                      </h2>
                    </div>
                    <div className="cart-table clearfix">
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Customer Name
                            </th>{" "}
                            <th style={{ textAlign: "center" }}>Event Name</th>
                            <th style={{ textAlign: "center" }}>Event Date</th>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Total Price
                            </th>
                            {/* <th style={{ textAlign: "center" }}>Duration</th> */}
                            <th style={{ textAlign: "center" }}>Status</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>{eventList}</tbody>
                      </table>
                    </div>
                    <div className="dstyle-btn-group button-right mt-100">
                      <Link
                        style={{ textTransform: "uppercase" }}
                        to={`/pageprofile`}
                        className="btn dstyle-btn btn-profile"
                      >
                        BACK TO PROFILE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.eventReducer.event,
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getEventMusician, acceptEvent, rejectEvent, getProfile }
)(EventSchedule);
