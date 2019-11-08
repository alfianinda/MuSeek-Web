import React, { Component } from "react";

import "../assets/scss/Admin.scss";

export class Admin extends Component {
  render() {
    return (
      <div className="admin-wrapper">
        <div className="container-fluid">
          <div class="table-responsive">
            <table
              style={{ borderRadius: "0.3rem" }}
              className="table table-hover table-dark"
            >
              <caption>List of Clients</caption>
              <thead>
                <tr>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    #
                  </th>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    Customer
                  </th>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    Musician
                  </th>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    Musician Perform
                  </th>
                  <th
                    style={{ backgroundColor: "#ffee54", color: "black" }}
                    scope="col"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Britney</td>
                  <td>Ada Music</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Perform</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Zul</td>
                  <td>Glints Band</td>
                  <td>
                    <span className="admin-span">unpaid</span>
                  </td>
                  <td>Waiting</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Roberto</td>
                  <td>Kangen</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Perform</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Gading</td>
                  <td>Cuma Band</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Done</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Zul</td>
                  <td>Kufaku</td>
                  <td>
                    <span className="admin-span">unpaid</span>
                  </td>
                  <td>Waiting</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Zul</td>
                  <td>Beat less</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Perform</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Zul</td>
                  <td>Quer</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Waiting</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Zul</td>
                  <td>Paramire Band</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Done</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Zul</td>
                  <td>the Polis</td>
                  <td>
                    <span className="admin-span">Paid</span>
                  </td>
                  <td>Perform</td>
                  <td>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-info-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-check-circle"></i>
                    </span>
                    <span
                      className="admin-span"
                      style={{ padding: "0 0.5rem", fontSize: "1.2rem" }}
                    >
                      <i class="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
