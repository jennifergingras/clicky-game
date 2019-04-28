import React from "react";
import "./style.css"

const ImageBox = props => {
  return (
    <div className="card">
      <img className="click-img" alt={props.image} src={require(`../img/${props.image}`)} />

    </div>
  );
};

export default ImageBox;