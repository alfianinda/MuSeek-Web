import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventDetail } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/EventDetail.scss";
import Rupiah from "./Rupiah";
import NewsLetter from "./NewsLetter";

class EventDetail extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    await this.props.getEventDetail(id);
    this.props.getProfile();
  }
  render() {
    const {
      status,
      category,
      dateEvent,
      duration,
      location,
      musicianId,
      customerId
    } = this.props.event;

    return (
      <div className="event-detail">
        <div className="container">
          <div className="r-detail-event">
            <div className="de-wrapper">
              <div className="de-content">
                <header className="de-header mt-5">Event Detail</header>
                <h5 className="de-h5">
                  <span className="de-span">Status</span> : {status}
                </h5>
                <h5 className="de-h5">
                  <span className="de-span">Event Category</span> : {category}
                </h5>
                <h5 className="de-h5">
                  <span className="de-span">Date</span> :{" "}
                  {new Date(dateEvent).toLocaleDateString()}
                </h5>
                <h5 className="de-h5">
                  <span className="de-span">Duration</span> : {duration} hours
                </h5>
                <h5 className="de-h5">
                  <span className="de-span">Event Location</span> :{" "}
                  {location && location.split(",").join(", ")}
                </h5>
                <h5 className="de-h5">
                  <span className="de-span">Total price</span> : Rp{" "}
                  {musicianId && Rupiah(musicianId.price)}
                  ,00
                </h5>
              </div>
              <div className="btn-de">
                {this.props.profile.role === "customer" && (
                  <Link to={`/detail/${musicianId && musicianId._id}`}>
                    <button className="btn tombol mt-5">Musician Detail</button>
                  </Link>
                )}
                <Link
                  to={
                    this.props.profile.role === "customer"
                      ? `/bookedlist=${customerId && customerId._id}`
                      : `/eventschedule=${musicianId && musicianId._id}`
                  }
                >
                  <button className="btn tombol mt-5">back to booklist</button>
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

const mapStateToProps = state => {
  return {
    event: state.eventReducer.eventById,
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getEventDetail, getProfile }
)(withRouter(EventDetail));
