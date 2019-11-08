import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import {
  getProfile,
  getMusician,
  getFav,
  addFav
} from "../store/actions/dataAction";
import { getEventCustomer } from "../store/actions/eventAction";
import swal from "sweetalert";
import Loader from "./Loader";
import Picture from "./Picture";
import Rupiah from "./Rupiah";
import "../assets/scss/MusicianList.scss";
import "../assets/scss/HomePage.scss";

class MusicianList extends Component {
  async componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    await this.props.getProfile();
    await this.props.getEventCustomer(this.props.profile._id);
  }

  handleAdd = id => {
    const data = this.props.event.map(ev => ev.musicianId._id);
    console.log(data);
    if (data.indexOf(id) === -1) {
      // this.props.history.push({
      //   pathname: `/bookform/`,
      //   state: {
      //     id: id
      //   }
      // });
      console.log("oke");
    } else {
      swal("MuSeek says:", "musician had been added before!", "warning");
    }
  };

  handleSubmit = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    if (localStorage.token == null) {
      return swal(
        "MuSeek says:",
        "Please login as a customer before adding favorite",
        "info"
      );
    } else {
      if (this.props.profile.role === "musician") {
        return swal(
          "MuSeek says:",
          "Please login as a customer before adding favorite",
          "info"
        );
      } else {
        const formData = {
          customerId: this.props.profile._id,
          musicianId: id
        };
        this.props.addFav(formData);
        swal("MuSeek says:", "Musician has been saved to Favorite", "success");
      }
    }
  };

  render() {
    if (this.props.loading) return <Loader />;
    const { currentPage, cardsPerPage } = this.props;

    //logic for displaying current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = this.props.musicians.slice(
      indexOfFirstCard,
      indexOfLastCard
    );

    const listMusician = currentCards.map(musician => {
      // console.log(musician._id);
      return (
        <div className="col-12 col-md-4 col-xl-4">
          <div className="single-product-wrapper" key={musician._id}>
            <div className="product-img">
              <Picture picture={musician} />
            </div>

            <div className="ratings-cart ratings">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              {/* <i className="circle left"></i> <i className="circle right"></i> */}
            </div>

            <div className="product-description d-flex align-items-center justify-content-between">
              <div className="product-meta-data">
                <div className="line" />
                <Link to={`/detail/${musician._id}`}>
                  <h6 className="h6">{musician.name}</h6>
                  {musician.price ? (
                    <h6 className="h6">
                      Start from Rp {Rupiah(musician.price)},00/ Event
                    </h6>
                  ) : (
                    <h6 className="h6">
                      <i>Price is not set by musician</i>
                    </h6>
                  )}
                  {/* {musician.skill.map((skill, index) => {
                    return <h6 className="h6" key="index">{(index ? "," : "") + skill}</h6>;
                  })} */}
                  {/* <h6 className="h6">
                    {musician.skill
                      .toString()
                      .split(",")
                      .join(", ")}
                  </h6> */}
                  <h6 className="h6">{musician.city}</h6>
                </Link>
              </div>

              <div className="ratings-cart text-right">
                <div className="cart">
                  <Link
                    to={{
                      pathname: "/bookform",
                      state: { musicianId: musician._id }
                    }}
                    // to="#"
                    onClick={() => this.handleAdd(musician._id)}
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add Event"
                    style={{ margin: "10px" }}
                  >
                    <img src="img/core-img/cart.png" alt="" />
                  </Link>

                  <Link
                    to="#"
                    onClick={() => this.handleSubmit(musician._id)}
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to Favorite"
                    style={{ margin: "10px" }}
                  >
                    <img src="img/core-img/favorites.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row1">{listMusician}</div>;
  }
}

const mapStateToProps = state => {
  return {
    musicians: state.listMusicianReducer.filteredMusicians,
    loading: state.listMusicianReducer.loading,
    profile: state.profileReducer.profile,
    event: state.eventReducer.event
  };
};

export default connect(
  mapStateToProps,
  { getProfile, getMusician, getFav, addFav, getEventCustomer }
)(withRouter(MusicianList));
