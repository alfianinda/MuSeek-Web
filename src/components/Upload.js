import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import setToken from "../helpers/setToken";
import "../assets/scss/Upload.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onChangeHandler = event => {
    var file = event.target.files[0];
    console.log(file);
    console.log(this.validateSize(event));
    if (this.validateSize(event)) {
      console.log(file);
      this.setState({
        selectedFile: file
      });
    }
  };

  fileUploadHandler = async () => {
    if (this.state.selectedFile == null) {
      return swal("MuSeek says:", "you have not uploaded", "warning");
    }

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const data = new FormData();
    console.log(this.state.selectedFile.name);
    data.append(
      "avatar",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(data);

    try {
      const res = await axios.put(
        "https://museek.herokuapp.com/api/user/upload-avatar",
        data
      );
      console.log(res.data);
      swal("MuSeek says:", "uploading success", "success");
    } catch (error) {
      console.log("error", error.response.data);
      swal("MuSeek says:", "uploading failed", "error");
    }
  };

  validateSize = event => {
    let file = event.target.files[0];
    let size = 200000;
    let err = "";
    console.log(file.size);
    if (file.size > size) {
      err = file.type + "is too large, please pick a smaller file\n";
      swal("MuSeek says:", err, "warning");
    }
    return true;
  };

  render() {
    return (
      <div className="container mt-50 mb-50">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form method="post" action="#" id="#">
              <div className="form-group files">
                <label>Upload Your File </label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={this.onChangeHandler}
                />
              </div>
            </form>
            <div className="pull-right mt-50">
              <Link to="/pageprofile">
                <button
                  width="100%"
                  type="button"
                  className="btn dstyle-btn btn-profile"
                >
                  BACK TO PROFILE
                </button>
              </Link>

              <button
                width="100%"
                type="button"
                className="btn dstyle-btn btn-profile"
                onClick={this.fileUploadHandler}
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
