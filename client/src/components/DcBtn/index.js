import React from "react";

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const DcBtn = () => {
  return (
    <button className="btn btn-icon" id="daily" type="submit" name="daily_care" value="1"><img className="main-services" src="/assets/daily-icon.png" alt="Dailycare Logo"
    width="300px"></img></button>
    
  );
}
export default DcBtn;

