import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getEventCustomer } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import Rupiah from "./Rupiah";
import "../assets/scss/Invoice.scss";
import NewsLetter from "./NewsLetter";

class Invoice extends Component {
  async componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    console.log(id);
    await this.props.getEventCustomer(id);
    this.props.getProfile();
  }

  render() {
    const invoiceData = this.props.event.map(inv => {
      return (
        inv.status === "accepted" && (
          <tr>
            <td className="font-cart inv">
              <span>{inv.musicianId.name}</span>
            </td>
            <td className="font-cart inv">
              <span>{inv.category}</span>
            </td>
            <td className="font-cart inv">
              <span>{new Date(inv.dateEvent).toLocaleDateString()}</span>
            </td>
            <td className="font-cart inv">
              <span>
                Rp {inv.musicianId.price && Rupiah(inv.musicianId.price)}
                ,00
              </span>
            </td>
          </tr>
        )
      );
    });

    const noData = this.props.event.map(empty => {
      return (
        empty.status !== "accepted" && (
          <p className="no-data">No invoice data!</p>
        )
      );
    });

    const filt = this.props.event.filter(
      musician => musician.status === "accepted"
    );

    console.log(filt);

    const sum = filt.reduce((tot, arr) => {
      return tot + arr.musicianId.price;
    }, 0);

    const { name, email, address, city, country } = this.props.profile;

    return (
      <div>
        <span>
          <div className="main-content-wrapper d-flex clearfix">
            <div className="cart-table-area bookedlist">
              <div className="container-fluid margin-inv">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12 col-lg-10">
                    <div className="cart-title">
                      <h2 style={{ textAlign: "center" }}>INVOICE</h2>
                    </div>
                    <div
                      className="cart-table clearfix"
                      style={{ marginBottom: "50px", marginTop: "50px" }}
                    >
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th
                              className="inv2"
                              style={{
                                color: "#ffee54",
                                fontWeight: "bolder"
                              }}
                            >
                              CUSTOMER DATA
                            </th>{" "}
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                            <td className="font-cart inv2">{name}</td>
                          </tr>
                          <tr>
                            <td className="font-cart inv2">{email}</td>
                          </tr>
                          <tr>
                            <td
                              className="font-cart inv2"
                              style={{
                                borderBottom: "2px solid white"
                              }}
                            >
                              {address}, {city}, {country}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="cart-table clearfix">
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th className="inv">Musician</th>{" "}
                            <th className="inv">Event Name</th>
                            <th className="inv">Event Date</th>
                            <th className="inv">Total Price</th>
                          </tr>
                        </thead>
                        <tbody>{invoiceData}</tbody>
                      </table>
                    </div>
                    {/* <div>{noData.slice(0, 1)}</div> */}
                  </div>
                </div>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12 col-lg-10">
                    <div className="cart-table clearfix">
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th className="inv"></th>
                            <th className="inv"></th>
                            <th
                              className="inv"
                              style={{ fontWeight: "bolder" }}
                            >
                              TOTAL PRICE
                            </th>
                            <th className="inv">Rp {Rupiah(sum)},00</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div>{noData.slice(0, 0)}</div>
                    <div className="dstyle-btn-group button-right mt-100">
                      <Link
                        to={`/bookedlist=${this.props.profile._id}`}
                        className="btn dstyle-btn btn-profile"
                      >
                        BACK TO BOOKED LIST
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <NewsLetter />
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
  { getEventCustomer, getProfile }
)(Invoice);
