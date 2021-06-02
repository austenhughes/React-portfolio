import React from "react";
// import "./style.css";

function Container({ fluid, children }) {
    return <div className="container">
    <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div></div>;
  }

  export default Container;