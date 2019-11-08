import React, { Component } from "react";
import "../assets/scss/Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid contact">
        <div className="contact-title underline"> Let's get in touch!</div>
        <div className="contact-p">
          Ready to start your next project with us ? Give us a call or send us
          an email and we will get back to you as soon as possible!
        </div>
        <div className="contact-content">
          <div className="contact-phone">
            <i class="fa fa-phone"></i>
            <p className="phone-p">0809-1000-888888</p>
          </div>
          <div className="contact-email">
            <i class="fa fa-envelope"></i>
            <p className="email-p">costumer.service@museek.com</p>
          </div>
        </div>
      </div>
    );
  }
}
