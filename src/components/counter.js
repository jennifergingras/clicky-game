import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
const Counter = (props) => {

  return (
    <div>
      <p className="score">Score: {props.score}</p>
      <div>
        <p className="highScore">High Score: {props.highScore}</p>
      </div>
    </div>
  )
}

export default Counter;
