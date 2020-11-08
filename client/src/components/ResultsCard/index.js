import React, { useState, useEffect } from "react";
import API from '../../utils/API'


function ResultCard() {

const [ shelter, setShelter] = useState([])


  useEffect(() => {
    API.getShelter()
    .then(res => {
      console.log("res form api call: ", res);
      setShelter(res.data)
    })
    .catch((err) => console.log(err));
  }, []); 

  return (
<div>
{shelter.map(shelters => (

  <div className="card text-white bg-dark mb-3" >
  <h2>{}</h2>
    <div className="card-body" key={shelters.phone_number}>
     <h3>{shelters.name}</h3>
     <h5>{shelters.address}</h5>
     <h3>{shelters.city}</h3>
     <h3>{shelters.state}</h3>
     <a>{shelters.website}</a>
    </div>
  </div>
))}
  
</div>
  );
}
export default ResultCard;