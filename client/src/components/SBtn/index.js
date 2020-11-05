import React from "react";
import '../css/style.css'

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const SBtn = () => {
  return (
    <button className="btn btn-icon" id="shelter"><img className="main-services" src="/assets/shelter-icon.png"
    alt="Shelter Logo" width="300px"></img></button>
  );
}
export default SBtn;