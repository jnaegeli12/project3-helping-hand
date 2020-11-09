import React, { useState, useEffect } from "react";
import API from '../utils/API'

function ShelterCard() {

const [shelter, setShelter] = useState([]);

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
    <div className="card-body" key={shelters.phone_number}>
     <h3>{shelters.name}</h3>
     <h5>{shelters.address}, {shelters.city} {shelters.state}</h5>
     <h3>Phone: {shelters.phone_number}</h3>
     <a className="text-white" href={shelters.website}>{shelters.website}</a>
    </div>
  </div>
))}
</div>
  );
}
export default ShelterCard;