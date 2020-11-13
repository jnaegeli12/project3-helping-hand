import React, { useState, useEffect } from "react";
import '../css/style.css';
import ResultsCard from '../ResultsCard';
import API from '../../utils/API';

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const SBtn = (props) => {

  // const [ shelter, setShelter] = useState([])


  // useEffect(() => {
  //   API.getShelter()
  //   .then(res => setShelter(res.data.result))
  //   .catch((err) => console.log(err));
  // }, []); 

  

  return (
    <div>
    <button className="btn btn-icon" id="shelter" {...props}><img className="main-services" src="/assets/shelter-icon.png"
    alt="Shelter Logo" width="300px"></img></button>
    </div>
  );
}
export default SBtn;