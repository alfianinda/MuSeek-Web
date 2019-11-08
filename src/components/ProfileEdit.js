import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import { editUser } from "../store/actions/dataAction";
import swal from "sweetalert";
import Districts from "../assets/data/list_of_area/Districts";
import Regencies from "../assets/data/list_of_area/regencies.json";
import Provinces from "../assets/data/list_of_area/provinces.json";
import propTypes from "prop-types";
import "../assets/scss/ProfileEdit.scss";

class ProfileEdit extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    price: "",
    gender: "",
    address: "",
    city: "Simeulue",
    country: "Aceh",
    description: "",
    skills: [],
    lists: ["Singer", "Guitar", "Drum", "Percussion", "Keyboard"],
    genres: [],
    listGenre: [
      "Jazz",
      "Dangdut",
      "Musical Theatre",
      "Rock",
      "Hip Hop",
      "Classical",
      "Country",
      "Heavy Metal",
      "Pop",
      "Acoustic",
      "RnB",
      "Koplo"
    ]
  };

  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSiteChanged = e => {
    this.setState({
      gender: e.currentTarget.value
    });
  };

  handleSubmitMusician = e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      price: this.state.price,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      description: this.state.description,
      skill: this.state.skills,
      genre: this.state.genres
    };

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.price === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.country === "" ||
      formData.description === "" ||
      formData.skill === "" ||
      formData.genre === ""
    ) {
      swal("MuSeek says:", "Please fill all the form input!", "warning");
    } else {
      this.props.editUser(formData);
      swal("MuSeek says:", "Musician data have been saved", "success");
      this.props.history.push("/upload");
    }
  };

  handleSubmitCustomer = e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country
    };
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.gender === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.country === ""
    ) {
      swal("MuSeek says:", "Please fill all the form input!", "warning");
    } else {
      this.props.editUser(formData);
      swal("MuSeek says:", "Customer data have been saved", "success");
      this.props.history.push("/upload");
    }
  };

  addskill = e => {
    if (this.state.skills.includes(e.target.value) === false) {
      this.setState({
        skills: [...this.state.skills, e.target.value]
      });
    }

    if (this.state.skills.includes(e.target.value) === true) {
      this.setState({
        skills: this.state.skills.filter(skill => skill !== e.target.value)
      });
    }
  };

  addgenre = e => {
    if (this.state.genres.includes(e.target.value) === false) {
      this.setState({
        genres: [...this.state.genres, e.target.value]
      });
    }

    if (this.state.genres.includes(e.target.value) === true) {
      this.setState({
        genres: this.state.genres.filter(genre => genre !== e.target.value)
      });
    }
  };

  render() {
    const districts = Districts.map(district => {
      return <option>{district.name}</option>;
    });
    const regencies = Regencies.map(regencie => {
      return (
        <option key={regencie.name} value={regencie.name}>
          {regencie.name}
        </option>
      );
    });
    const provinces = Provinces.map(province => {
      return (
        <option key={province.name} value={province.name}>
          {province.name}
        </option>
      );
    });
    const { role } = this.props.profile;
    return (
      <div>
        <div className="container edit">
          <div className="row edit-row">
            <div className="col-12 col-lg-12">
              <h1 className="edit-title">EDIT PROFILE</h1>
            </div>
          </div>
          <div className="row edit-row">
            {role === "customer" && (
              <div className="col-12 col-lg-6 edit-col-left">
                <form className="edit-form">
                  <p className="edit-p">Full Name</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder=" Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Email</p>
                  <input
                    className="input-form"
                    type="email"
                    placeholder=" E-mail"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Password</p>
                  <input
                    className="input-form"
                    type="password"
                    placeholder=" Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Gender</p>
                  <div className="edit-gender">
                    <label>
                      <input
                        className="input-radio"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.onSiteChanged}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        className="input-radio"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.onSiteChanged}
                      />{" "}
                      Female
                    </label>
                  </div>
                </form>
              </div>
            )}
            {role === "musician" && (
              <div className="col-12 col-lg-6 edit-col-left">
                <form className="edit-form">
                  <p className="edit-p">Full Name</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder=" Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Email</p>
                  <input
                    className="input-form"
                    type="email"
                    placeholder=" E-mail"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Password</p>
                  <input
                    className="input-form"
                    type="password"
                    placeholder=" Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {/* <p className="edit-p">Gender</p>
                  <div className="edit-gender">
                    <label>
                      <input
                        className="input-radio"
                        type="radio"
                        name="male"
                        value="male"
                        onChange={this.onSiteChanged}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        className="input-radio"
                        type="radio"
                        name="female"
                        value="female"
                        onChange={this.onSiteChanged}
                      />{" "}
                      Female
                    </label>
                  </div> */}

                  <p className="edit-p">Address</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder=" Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />

                  <p className="edit-p">Provinces</p>
                  <select
                    className="input-form"
                    value={this.state.country}
                    onChange={e =>
                      this.setState({
                        country: e.target.value
                      })
                    }
                  >
                    {provinces}
                  </select>

                  <p className="edit-p">City</p>
                  <select
                    className="input-form"
                    value={this.state.city}
                    onChange={e =>
                      this.setState({
                        city: e.target.value
                      })
                    }
                  >
                    {regencies}
                  </select>

                  <p className="edit-p">Districts</p>
                  <select className="input-form">{districts}</select>
                </form>
              </div>
            )}
            {role === "customer" && (
              <div className="col-12 col-lg-6 edit-col-right respon-table">
                <form className="edit-form">
                  <p className="edit-p">Address</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder=" Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />

                  <p className="edit-p">Provinces</p>
                  <select
                    className="input-form"
                    value={this.state.country}
                    onChange={e =>
                      this.setState({
                        country: e.target.value
                      })
                    }
                  >
                    {provinces}
                  </select>

                  <p className="edit-p">City</p>
                  <select
                    className="input-form"
                    value={this.state.city}
                    onChange={e =>
                      this.setState({
                        city: e.target.value
                      })
                    }
                  >
                    {regencies}
                  </select>

                  <p className="edit-p">Districts</p>
                  <select className="input-form">{districts}</select>
                </form>
              </div>
            )}
            {role === "musician" && (
              <div className="col-12 col-lg-6 edit-col-right respon-table">
                <form className="edit-form">
                  <p className="edit-p">Price</p>
                  <input
                    className="input-form"
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Description</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder=" Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  <p className="edit-p">Instruments</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder="Pick Instruments"
                    value={this.state.skills.map(sk => {
                      return sk;
                    })}
                  />
                  <div className="skill-btn-box">
                    {this.state.lists.map(list => {
                      return (
                        <input
                          className="btn tombol skill-btn"
                          type="button"
                          value={list}
                          onClick={this.addskill}
                        />
                      );
                    })}
                  </div>
                  <p className="edit-p">Genre</p>
                  <input
                    className="input-form"
                    type="text"
                    placeholder="Pick Genre"
                    value={this.state.genres.map(sk => {
                      return sk;
                    })}
                  />
                  <div className="skill-btn-box">
                    {this.state.listGenre.map(list => {
                      return (
                        <input
                          className="btn tombol skill-btn"
                          type="button"
                          value={list}
                          onClick={this.addgenre}
                        />
                      );
                    })}
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="edit-button profil">
            <Link to="/pageprofile">
              <button className="btn dstyle-btn btn-profile">
                BACK TO PROFILE
              </button>
            </Link>
            {role === "musician" ? (
              <button
                className="btn dstyle-btn btn-profile"
                onClick={this.handleSubmitMusician}
              >
                SAVED
              </button>
            ) : (
              <button
                className="btn dstyle-btn btn-profile"
                onClick={this.handleSubmitCustomer}
              >
                SAVED
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  editUser: propTypes.func.isRequired,
  getProfile: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { editUser, getProfile }
)(withRouter(ProfileEdit));
