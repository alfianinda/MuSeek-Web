import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { getProfile, getMusicianDetail } from "../store/actions/dataAction";
import swal from "sweetalert";
import Loader from "./Loader";
import Rupiah from "./Rupiah";
import Picture from "./Picture";
import "../assets/scss/DetailComponent.scss";
import NewsLetter from "./NewsLetter";

class DetailComponent extends Component {
  async componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    await this.props.getProfile();
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getMusicianDetail(id);
  }

  handleAdd = id => {
    const data = this.props.event.map(ev => ev.musicianId._id);
    console.log(data);
    if (data.indexOf(id) === -1) {
      console.log("ok");
    } else {
      swal("MuSeek says:", "musician had been added before!", "warning");
    }
  };

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div>
        <div className="detail-wrapper">
          <div className="container">
            <div className="detail">
              <div className="row">
                <div className="col-12 col-md-5 col-lg-5">
                  <div className="detail--col-left">
                    <figure className="figure">
                      {/* <img
                      src={require("../assets/images/gigs1.jpg")}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    /> */}
                      <Link to="/upload">
                        <Picture
                          picture={this.props.musician}
                          giveBorder={true}
                        />
                      </Link>
                    </figure>
                    <div className="detail--col-tittle">
                      <header className="detail--col-tittle-header">
                        {this.props.musician.name}
                      </header>
                    </div>

                    <div className="detail--col-box">
                      <div className="detail-p">
                        <span className="detail-sign">
                          <i class="fa fa-money"></i>
                        </span>
                        <span className="detail-sign-text">Price / event</span>
                        <div>
                          <p className="detail-sign-text below">
                            {/* 250.000,- / hours */}
                            {this.props.musician.price ? (
                              <span>
                                Rp {Rupiah(this.props.musician.price)},00/ Event
                              </span>
                            ) : (
                              <span>
                                <i>Price is not set by musician</i>
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="detail--col-box">
                      <div className="detail-p">
                        <span className="detail-sign">
                          <i class="fa fa-map-marker"></i>
                        </span>
                        <span className="detail-sign-text">
                          Musician Address
                        </span>
                        <div>
                          <p className="detail-sign-text below">
                            {this.props.musician.address},{" "}
                            {this.props.musician.city},{" "}
                            {this.props.musician.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                  <div className="detail--col-right">
                    <div className="detail--col-box">
                      <span className="detail-fa">
                        <i class="fa fa-star"></i>
                      </span>

                      <div className="detail-sign-text">
                        {this.props.musician.rating &&
                        this.props.musician.rating.length === 0
                          ? "No rating"
                          : this.props.musician.rating}
                      </div>
                    </div>
                    <div className="detail--col-box">
                      <span className="detail-fa">
                        <i class="fa fa-music"></i>
                      </span>

                      <div className="detail-sign-text">
                        {this.props.musician.genre &&
                          this.props.musician.genre
                            .toString()
                            .split(",")
                            .join(", ")}
                      </div>
                    </div>
                    <div className="detail--col-box">
                      <span className="detail-fa">
                        <i class="fa fa-user"></i>
                      </span>
                      <div className="detail-sign-text">
                        {this.props.musician.skill &&
                          this.props.musician.skill
                            .toString()
                            .split(",")
                            .join(", ")}
                      </div>
                    </div>
                    <div className="detail--col-box">
                      <span className="detail-fa">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <div className="detail-sign-text">
                        {this.props.musician.email}
                      </div>
                    </div>
                    <div className="detail--col-box">
                      <div className="detail-desc">
                        <h4 className="detail-desc-tittle">Description</h4>
                        <h5 className="detail-desc-body">
                          {this.props.musician.description}
                        </h5>
                      </div>
                    </div>
                    <div className="btn-tombol">
                      <Link to="/musicianpage">
                        <button className="btn dstyle-btn btn-profile">
                          {" "}
                          BACK TO MUSICIAN LIST
                        </button>
                      </Link>

                      <Link
                        to={{
                          pathname: "/bookform",
                          state: { musicianId: this.props.musician._id }
                        }}
                        // to="#"
                        onClick={() => this.handleAdd(this.props.musician._id)}
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add Event"
                      >
                        <button className="btn dstyle-btn btn-profile">
                          {" "}
                          BOOK NOW
                        </button>
                      </Link>
                    </div>
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
    musician: state.listMusicianReducer.musicianById,
    loading: state.listMusicianReducer.loading2,
    event: state.eventReducer.event
  };
};

export default connect(
  mapStateToProps,
  { getProfile, getMusicianDetail }
)(withRouter(DetailComponent));
