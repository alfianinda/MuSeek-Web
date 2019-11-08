import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <i
        class="fa fa-spinner fa-pulse"
        style={{ fontSize: "18rem", color: "#ffee54", margin: "6.25rem" }}
      ></i>
    </div>
  );
}

export default Loader;
