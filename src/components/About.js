import React, { Component } from "react";
import "../assets/scss/About.scss";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-wrraper">
          <div className="container">
            <div className="about-tittle">
              <header className="about-tittle-header underline">
                About MUseek
              </header>
              <p className="about-tittle-p">
                For music enthusiast who wants to book a musician / collabs with
                musician, “MUseek” is a tech platform that provide a convenience
                to use musician’s services. Our vision is to be the Musician’s
                best friends. to build a place for everyone who wants to book
                various group of talented musicians and a place for musicians to
                collabs with other musicians.
              </p>
            </div>
            <div className="about-content-wrapper">
              <header className="about-content-tittle underline">
                Meet our team
              </header>
              <div className="row">
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/be1.jpeg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        Back-End Developer
                      </header>
                      <div className="about-content-body">
                        Reynanda Putra Pratama
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/rn1.jpeg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        React-Native Developer
                      </header>
                      <div className="about-content-body">
                        Samuel Ezzay Tarigan
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/fe1.jpg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        Front-End Developer
                      </header>
                      <div className="about-content-body">Rifqi Yuliandri</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/be2.jpg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        Back-End Developer
                      </header>
                      <div className="about-content-body">Muhammad Nur Ali</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/rn2.jpeg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        React-Native Developer
                      </header>
                      <div className="about-content-body">Fiki Zulfikar</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-50">
                  <div className="about-content-col">
                    <div className="about-content">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/me.png")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="content-header">
                        Front-End Developer
                      </header>
                      <div className="about-content-body">
                        Nur Inna Alfianinda
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-client-wrapper">
              <header className="about-client-tittle underline">
                our Priority
              </header>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="about-client-col">
                    <div className="about-client">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/profile1.jpg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="client-header">Customer</header>
                      <div className="about-client-body">
                        Customer is our Priority...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="about-client-col">
                    <div className="about-client">
                      <figure className="figure">
                        <img
                          src={require("../assets/images/profile1.jpg")}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                      </figure>
                      <header className="client-header">Musician</header>
                      <div className="about-client-body">
                        Musician is our Priority...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
