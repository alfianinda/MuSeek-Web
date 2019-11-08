import React, { Component } from "react";
import { connect } from "react-redux";
import { getPrivacy } from "../store/actions/dataAction";
import "../assets/scss/Privacy.scss";

class Privacy extends Component {
  componentDidMount() {
    this.props.getPrivacy();
  }
  render() {
    return (
      <div className="container-fluid privacy">
        <div className="privacy-box">
          <nav
            id="navbar-example2"
            className="navbar navbar-light"
            style={{ backgroundColor: "#1a1a1d" }}
          >
            <a className="navbar-brand" href="#a">
              <h4 style={{ color: "#ffffff" }}>Privacy and Policies</h4>
            </a>
            {/* <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Pengantar"
                  style={{ color: "#ffffff" }}
                >
                  Pengantar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Tentang Kebijakan ini"
                  style={{ color: "#ffffff" }}
                >
                  Tentang Kebijakan ini
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Hak"
                  style={{ color: "#ffffff" }}
                >
                  Hak dan preferensi
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#a"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "#ffffff" }}
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#one">
                    one
                  </a>
                  <a className="dropdown-item" href="#two">
                    two
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <a className="dropdown-item" href="#three">
                    three
                  </a>
                </div>
              </li>
            </ul> */}
          </nav>
          <div
            data-spy="scroll"
            data-target="#navbar-example2"
            data-offset={0}
            style={{ padding: "20px " }}
          >
            <h5 id="Tentang Kebijakan ini">About this Policies</h5>
            <p>{this.props.privacy.content}</p>
            {/* <h4 id="Pengantar">Pengantar</h4>

            <p>
              Thanks for choosing Spotify!
              <br />
              At Spotify, we want to give you the best possible experience to
              ensure that you enjoy our service today, tomorrow, and in the
              future. To do this we need to understand your listening habits so
              we can deliver an exceptional and personalized service
              specifically for you. That said, your privacy and the security of
              your personal data is, and will always be, enormously important to
              us. So, we want to transparently explain how and why we gather,
              store, share and use your personal data - as well as outline the
              controls and choices you have around when and how you choose to
              share your personal data.
              <br /> That is our objective, and this Privacy Policy (“Policy”)
              will explain exactly what we mean in further detail below.
            </p>
            <h4 id="Tentang Kebijakan ini">About this Policies</h4>
            <p>
              This Policy sets out the essential details relating to your
              personal data relationship with Spotify AB. The Policy applies to
              all Spotify services and any associated services (referred to as
              the ‘Spotify Service’). The terms governing your use of the
              Spotify Service are defined in our Terms and Conditions of Use
              (the “Terms and Conditions of Use”).
              <br />
              From time to time, we may develop new or offer additional
              services. If the introduction of these new or additional services
              results in any change to the way we collect or process your
              personal data we will provide you with more information and
              additional terms or policies. Unless stated otherwise when we
              introduce these new or additional services, they will be subject
              to this Policy.
              <br />
              The aim of this Policy is to:
              <br />
              <div className="privacy-p-div">
                1. Ensure that you understand what personal data we collect
                about you, the reasons why we collect and use it, and who we
                share it with;
                <br />
                2. Explain the way we use the personal data that you share with
                us in order to give you a great experience when you are using
                the Spotify Service; and
                <br />
                3. Explain your rights and choices in relation to the personal
                data we collect and process about you and how we will protect
                your privacy.
                <br />
                We hope this helps you to understand our privacy commitments to
                you. For further clarification of the terms used in this Policy
                please visit our Privacy Center on spotify.com. For information
                on how to contact us if you ever have any questions or concerns,
                please see the ‘How to Contact Us’ Section 14 below.
                Alternatively, if you do not agree with the content of this
                Policy, then please remember it is your choice whether you want
                to use the Spotify Service.
              </div>
            </p>
            <h4 id="Hak">Your rights and your preferences</h4>
            <p>
              You may be aware that a new European Union law, called the General
              Data Protection Regulation or "GDPR" gives certain rights to
              individuals in relation to their personal data. Accordingly, we
              have implemented additional transparency and access controls in
              our Privacy Center and Privacy Settings to help users take
              advantage of those rights. As available and except as limited
              under applicable law, the rights afforded to individuals are:
              <br />
              <ul>
                <li className="privacy-p-li">
                  Right of Access - the right to be informed of and request
                  access to the personal data we process about you;
                </li>
                <li className="privacy-p-li">
                  Right to Rectification - the right to request that we amend or
                  update your personal data where it is inaccurate or
                  incomplete;
                </li>
                <li className="privacy-p-li">
                  Right to Erasure - the right to request that we delete your
                  personal data;
                </li>
                <li className="privacy-p-li">
                  Right to Restrict - the right to request that we temporarily
                  or permanently stop processing all or some of your personal
                  data;
                </li>
                <li className="privacy-p-li">
                  Right to Object -
                  <ul>
                    <li className="privacy-p-li">
                      the right, at any time, to object to us processing your
                      personal data on grounds relating to your particular
                      situation;
                    </li>
                    <li className="privacy-p-li">
                      the right to object to your personal data being processed
                      for direct marketing purposes;
                    </li>
                  </ul>
                </li>
                <li>
                  Right to Data Portability - the right to request a copy of
                  your personal data in electronic format and the right to
                  transmit that personal data for use in another party’s
                  service; and
                </li>
                Right not to be subject to Automated Decision-making - the right
                to not be subject to a decision based solely on automated
                decision making, including profiling, where the decision would
                have a legal effect on you or produce a similarly significant
                effect.
              </ul>
            </p>
            <h4 id="one">one</h4>
            <p>...</p>
            <h4 id="two">two</h4>
            <p>...</p>
            <h4 id="three">three</h4>
            <p>...</p> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    privacy: state.listMusicianReducer.privacy
  };
};

export default connect(
  mapStateToProps,
  { getPrivacy }
)(Privacy);
