import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/ProfilePage.scss";
import NewsLetter from "./NewsLetter";
import Picture from "./Picture";
import Rupiah from "./Rupiah";

class ProfilePage extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  render() {
    const { role } = this.props.profile;

    return (
      <div>
        <div className="main-content-wrapper d-flex clearfix">
          <div className="cart-table-area profile">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="cart-title">
                    <h2>MY PROFILE</h2>
                  </div>

                  <div className="cart-table clearfix">
                    <table className="table table-responsive">
                      <tbody>
                        <tr>
                          <td className="font-cart width-profile-description">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <div className="picture-profile">
                                {" "}
                                <Link to="/upload">
                                  <Picture
                                    picture={this.props.profile}
                                    giveBorder={true}
                                  />
                                </Link>
                              </div>
                            </div>
                            <p className="p-profile">
                              Name: {this.props.profile.name}
                            </p>
                            <p className="p-profile">
                              Gender: {this.props.profile.gender}
                            </p>
                            <p className="p-profile">
                              Address: {this.props.profile.address},{" "}
                              {this.props.profile.city},{" "}
                              {this.props.profile.country}
                            </p>
                            <p className="p-profile">
                              E-mail: {this.props.profile.email}
                            </p>

                            {role === "musician" && (
                              <span>
                                <p className="p-profile">
                                  Genres:{" "}
                                  {this.props.profile.genre &&
                                    this.props.profile.genre
                                      .toString()
                                      .split(",")
                                      .join(", ")}
                                </p>
                                <p className="p-profile">
                                  Skills:{" "}
                                  {this.props.profile.skill &&
                                    this.props.profile.skill
                                      .toString()
                                      .split(",")
                                      .join(", ")}
                                </p>
                                <p className="p-profile">
                                  Price: Rp{" "}
                                  {this.props.profile.price &&
                                    Rupiah(this.props.profile.price)}
                                  , 00
                                </p>
                                <p className="p-profile">
                                  Rating: {this.props.profile.rating}
                                </p>
                                <p className="p-profile">
                                  Description: {this.props.profile.description}
                                </p>{" "}
                              </span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          {" "}
                          <td className="font-cart width-profile-description">
                            <div className="dstyle-btn-group button-right">
                              <Link
                                to="/edit"
                                className="btn dstyle-btn btn-profile"
                              >
                                EDIT PROFILE
                              </Link>
                            </div>
                            {role === "customer" ? (
                              <span>
                                <div className="dstyle-btn-group button-right">
                                  <Link
                                    to="/favorite"
                                    className="btn dstyle-btn btn-profile"
                                  >
                                    FAVORITE
                                  </Link>
                                </div>
                                <div className="dstyle-btn-group button-right">
                                  <Link
                                    to={`/bookinghistory=${this.props.profile._id}`}
                                    className="btn dstyle-btn btn-profile"
                                  >
                                    BOOKING HISTORY
                                  </Link>
                                </div>
                                <div className="dstyle-btn-group button-right">
                                  <Link
                                    to={`/invoicehistory=${this.props.profile._id}`}
                                    className="btn dstyle-btn btn-profile"
                                  >
                                    INVOICE HISTORY
                                  </Link>
                                </div>{" "}
                              </span>
                            ) : (
                              <div className="dstyle-btn-group button-right">
                                <Link
                                  to={`/eventschedule=${this.props.profile._id}`}
                                  className="btn dstyle-btn btn-profile"
                                >
                                  EVENT SCHEDULE
                                </Link>
                              </div>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
  { getProfile }
)(ProfilePage);
