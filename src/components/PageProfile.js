import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import Loader from "./Loader";
import Picture from "./Picture";
import Rupiah from "./Rupiah";
import "../assets/scss/PageProfile.scss";
import "../assets/scss/ProfilePage.scss";

class PageProfile extends Component {
  componentDidMount() {
    if (localStorage.setToken) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  render() {
    if (this.props.loading) return <Loader />;
    const { role } = this.props.profile;

    return (
      <div className="profile-wrapper">
        <div className="container">
          <div className="profile-header">
            <h1 className="profile-header-h2">my profile</h1>
          </div>
          <div className="row">
            <div class="col-12 col-md-5 col-lg-5">
              <div class="col-left">
                <div className="profile-pict">
                  <figure className="figure">
                    <Link to="/upload">
                      <Picture picture={this.props.profile} giveBorder={true} />
                    </Link>
                  </figure>
                </div>
                <div className="profile-role">
                  {role === "musician" ? (
                    <h2 className="profile-role-h2">Musician</h2>
                  ) : (
                    <h2 className="profile-role-h2">Customer</h2>
                  )}
                </div>
                <div className="profile-desc">
                  <h5
                    className="profile-desc-text"
                    style={{ textAlign: "justify" }}
                  >
                    <span className="desc-text-span">
                      {role === "musician" && this.props.profile.description}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <div className="col-right">
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-id-card"></i>
                    </span>
                    <h3 className="profile-h3">Full Name</h3>
                  </div>
                  <p className="profile-p">{this.props.profile.name}</p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <h3 className="profile-h3">Email</h3>
                  </div>
                  <p className="profile-p">{this.props.profile.email}</p>
                </div>
                {role === "customer" && (
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-venus-mars"></i>
                      </span>
                      <h3 className="profile-h3">gender</h3>
                    </div>
                    <p className="profile-p">{this.props.profile.gender}</p>
                  </div>
                )}
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-map-marker"></i>
                    </span>
                    <h3 className="profile-h3">Address</h3>
                  </div>
                  <p className="profile-p">
                    {this.props.profile.address}, {this.props.profile.city},{" "}
                    {this.props.profile.country}
                  </p>
                </div>
                {role === "musician" && (
                  <div>
                    <div className="profile-box">
                      <div className="profile-box-tittle">
                        <span className="box-fa">
                          <i class="fa fa-money"></i>
                        </span>
                        <h3 className="profile-h3">Price/ event</h3>
                      </div>
                      <p className="profile-p">
                        Rp{" "}
                        {this.props.profile.price &&
                          Rupiah(this.props.profile.price)}
                        ,00
                      </p>
                    </div>
                    <div className="profile-box">
                      <div className="profile-box-tittle">
                        <span className="box-fa">
                          <i class="fa fa-play-circle"></i>
                        </span>
                        <h3 className="profile-h3">Instruments</h3>
                      </div>
                      <p className="profile-p">
                        {this.props.profile.skill &&
                          this.props.profile.skill
                            .toString()
                            .split(",")
                            .join(", ")}
                      </p>
                    </div>
                    <div className="profile-box">
                      <div className="profile-box-tittle">
                        <span className="box-fa">
                          <i class="fa fa-music"></i>
                        </span>
                        <h3 className="profile-h3">Genre</h3>
                      </div>
                      <p className="profile-p">
                        {this.props.profile.genre &&
                          this.props.profile.genre
                            .toString()
                            .split(",")
                            .join(", ")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="profile-btn">
            <span>
              <Link to="/edit">
                <button className="btn dstyle-btn btn-profile">
                  EDIT PROFILE
                </button>
              </Link>
            </span>
            {role === "customer" ? (
              <span>
                <Link to="/favorite">
                  <button className="btn dstyle-btn btn-profile">
                    FAVORITE
                  </button>
                </Link>
                <Link to={`/bookinghistory=${this.props.profile._id}`}>
                  <button className="btn dstyle-btn btn-profile">
                    BOOKING HISTORY
                  </button>
                </Link>
                <Link to={`/invoicehistory=${this.props.profile._id}`}>
                  <button className="btn dstyle-btn btn-profile">
                    INVOICE HISTORY
                  </button>
                </Link>
              </span>
            ) : (
              <span>
                <Link to={`/eventschedule=${this.props.profile._id}`}>
                  <button className="btn dstyle-btn btn-profile">
                    EVENT SCHEDULE
                  </button>
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(PageProfile);
