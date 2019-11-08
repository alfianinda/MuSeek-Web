import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getEventCustomer, deleteEvent } from "../store/actions/eventAction";
import Rupiah from "./Rupiah";
import Loader from "./Loader";
import "../assets/scss/BookedList.scss";
import PaymentCard from "./PaymentCard";
import NewsLetter from "./NewsLetter";

class BookedList extends Component {
  async componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    console.log(id);
    await this.props.getEventCustomer(id);
    await this.props.event;
  }

  handleDelete = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    console.log(id);
    await this.props.deleteEvent(id);

    const idi = this.props.match.params.id;
    console.log(idi);
    this.props.getEventCustomer(idi);
  };

  render() {
    if (this.props.loading) return <Loader />;
    // console.log(this.props.event);
    const bookedList =
      this.props.event &&
      this.props.event.map(myevent => {
        return (
          <tr>
            <td className="font-cart wider" style={{ textAlign: "center" }}>
              <span>{myevent.musicianId.name}</span>
            </td>
            <td className="font-cart" style={{ textAlign: "center" }}>
              <span>{myevent.category}</span>
            </td>
            <td className="font-cart" style={{ textAlign: "center" }}>
              <span>{new Date(myevent.dateEvent).toLocaleDateString()}</span>
            </td>
            <td className="font-cart wider" style={{ textAlign: "center" }}>
              <span>
                Rp{" "}
                {myevent.musicianId.price && Rupiah(myevent.musicianId.price)}
                ,00
              </span>
            </td>
            {/* <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{myevent.duration / 3600000} hours</span>
          </td> */}
            <td className="font-cart" style={{ textAlign: "center" }}>
              <span>{myevent.status}</span>
            </td>
            <td className="font-cart">
              <span className="button-action">
                {" "}
                <div className="dstyle-btn-group">
                  <Link
                    to={`/eventdetail/${myevent._id}`}
                    className="button-edit"
                  >
                    <i class="fa fa-info"></i>
                  </Link>
                </div>
                <div className="dstyle-btn-group">
                  <Link
                    to={`/eventedit/${myevent._id}`}
                    className="button-edit"
                  >
                    <i className="fa fa-edit"></i>
                  </Link>
                </div>
                <div className="dstyle-btn-group">
                  <Link to="#" className="button-edit">
                    <i
                      className="fa fa-trash"
                      onClick={() => this.handleDelete(myevent._id)}
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
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="cart-title">
                      <h2>BOOKED LIST</h2>
                    </div>
                    <div className="cart-table clearfix">
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Musician
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
                        <tbody>{bookedList}</tbody>
                      </table>
                    </div>
                  </div>
                  <PaymentCard event={this.props.event} />
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
    event: state.eventReducer.event,
    loading: state.eventReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { getEventCustomer, deleteEvent }
)(BookedList);
