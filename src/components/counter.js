import React from "react";
import ImageBox from "./imageBox"

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  

  // count is going to have to change on click of card components


  //
  render() {
    return (
      <div>
        <p>Score: {this.state.count}</p>
        <div>
          <p>High Score:</p>
        </div>
      </div>
    )
  }


}


export default Counter;
