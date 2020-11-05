import React from "react";

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const HBtn = () => {
  return (
    <button className="btn btn-icon" id="health"><img className="main-services" src="/assets/health-icon.png"
    alt="HaelthCare Logo"  width="300px"></img></button>
  );
}
export default HBtn;