import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
const Counter = (props) => {

  return (
    <div>
      <p className="score">Score: {props.score}</p>
      <p className="highScore">High Score: {props.highScore}</p>
      <h4 className="message">{props.message}</h4>
    </div>
  )
}

export default Counter;
