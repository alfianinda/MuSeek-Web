import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getFav, deleteFav } from "../store/actions/dataAction";
import Rupiah from "./Rupiah";
import "../assets/scss/BookedList.scss";
import NewsLetter from "./NewsLetter";

class Favorite extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    this.props.getFav();
  }

  handleDelete = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    await this.props.deleteFav(id);
    this.props.getFav();
  };

  render() {
    const favs = this.props.fav.map(fav => {
      return (
        <tr>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>{fav.musicianId.name}</span>
          </td>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>{fav.musicianId.email}</span>
          </td>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>{fav.musicianId.city}</span>
          </td>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>
              Rp {fav.musicianId.price && Rupiah(fav.musicianId.price)}
              ,00
            </span>
          </td>
          <td className="font-cart wider">
            <span className="button-action">
              {" "}
              <div className="dstyle-btn-group mr-3">
                <Link
                  to={`/detail/${fav.musicianId._id}`}
                  className="button-edit"
                >
                  <i class="fa fa-info"></i>
                </Link>
              </div>
              <div className="dstyle-btn-group">
                <Link to="#" className="button-edit">
                  <i
                    className="fa fa-trash"
                    onClick={() => this.handleDelete(fav._id)}
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
                  <div className="col-12 col-lg-12">
                    <div className="cart-title">
                      <h2
                        style={{
                          textAlign: "center",
                          textTransform: "uppercase"
                        }}
                      >
                        MUSICIAN FAVORITE
                      </h2>
                    </div>
                    <div
                      className="cart-table clearfix"
                      style={{ marginTop: "50px" }}
                    >
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Musician Name
                            </th>{" "}
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Musician E-mail
                            </th>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Musician City
                            </th>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Performance Price
                            </th>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>{favs}</tbody>
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
          <NewsLetter />
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fav: state.profileReducer.fav
  };
};

export default connect(
  mapStateToProps,
  { getFav, deleteFav }
)(Favorite);
