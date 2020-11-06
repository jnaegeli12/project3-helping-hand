import React from "react";

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
export default function DcBtn() {
  return (
    <button className="btn btn-icon" id="daily" type="submit" name="daily_care" value="1">
      <img className="main-services" src="/assets/daily-icon.png" alt="Dailycare Logo" width="300px" />
    </button>
    

    // <button className="btn btn-icon" id={ hh.id } type="submit" name={ hh.name } value={ hh.value }>
    //   <img className="main-services" src={ hh.image } alt={ hh.alt} width="300px" />
    // </button>
  );
}
// export default DcBtn;

