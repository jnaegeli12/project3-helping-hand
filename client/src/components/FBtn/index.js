import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const FBtn = () => {
  return (
    <button className="btn btn-icon" id="food"><img className="main-services" src="/assets/food-icon.png" alt="Food Logo"
    width="300px"></img>
    </button>
    
  );
}
export default FBtn;