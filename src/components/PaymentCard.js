import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import Rupiah from "./Rupiah";
import "../assets/scss/PaymentCard.scss";

class PaymentCard extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  render() {
    const filt = this.props.event.filter(
      musician => musician.status === "accepted"
    );

    console.log(filt);

    const prices = filt.reduce((tot, arr) => {
      return tot + arr.musicianId.price;
    }, 0);

    // const prices = this.props.event.reduce((tot, arr) => {
    //   return tot + arr.musicianId.price;
    // }, 0);
    return (
      <div className="col-12 col-lg-4">
        <div className="cart-summary">
          <h5>Total Payment</h5>
          <ul className="summary-table">
            <li>
              <span>subtotal:</span>{" "}
              <span>
                Rp {prices && Rupiah(prices)}
                ,00
              </span>
            </li>
            <li>
              <span>transportation:</span> <span>Free</span>
            </li>
            <li>
              <span>total:</span> <span>Rp {prices && Rupiah(prices)},00</span>
            </li>
          </ul>
          <div className="cart-btn mt-100">
            <Link
              to={`/invoice=${this.props.profile._id}`}
              className="btn dstyle-btn w-100"
            >
              Checkout
            </Link>
          </div>
        </div>
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
)(PaymentCard);
