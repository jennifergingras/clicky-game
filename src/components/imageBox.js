import React from "react";
import "./style.css"

const ImageBox = props => {
  return (
    <div className="card" >
      <img className="click-img" alt={props.image} id={props.id} src={require(`../img/${props.image}`)} onClick={props.cardClick}/>
    </div>
  );
};

export default ImageBox;