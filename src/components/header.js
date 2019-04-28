import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <div className="header-container">
        <h1>Memory Click</h1>
        <p>There are 12 patterns below. Test your memory by clicking each of them only once.</p>
      </div>
    </div>
  );
}

export default Header;