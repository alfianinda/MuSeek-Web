import React from "react";

const Picture = props => {
  if (props.picture.profile_picture === undefined) {
    return <img src={require("../assets/images/beatles.jpg")} alt="" />;
  } else {
    return (
      <img
        src={props.picture.profile_picture && props.picture.profile_picture.url}
        alt=""
        className={props.giveBorder ? "picture-profile" : null}
      />
    );
  }
};

export default Picture;
