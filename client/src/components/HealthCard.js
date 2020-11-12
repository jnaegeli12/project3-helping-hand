import React, { useState, useEffect } from "react";
import API from '../utils/API'

function HealthCard() {

const [health, setHealth] = useState([]);

  useEffect(() => {
    API.getHealth()
    .then(res => {
      console.log("res form api call: ", res);
      setHealth(res.data)
    })
    .catch((err) => console.log(err));
  }, []); 

  return (
<div>
{health.map(healthOrgs => (
  <div className="card text-white bg-dark mb-3" >
    <div className="card-body" key={healthOrgs.phone_number}>
     <h3>{healthOrgs.name}</h3>
     <h5>{healthOrgs.address}, {healthOrgs.city} {healthOrgs.state}</h5>
     <h3>Phone: {healthOrgs.phone_number}</h3>
     <p>{healthOrgs.description}</p>
     <a className="text-white" href={healthOrgs.website}>{healthOrgs.website}</a>
    </div>
  </div>
))}
</div>
  );
}
export default HealthCard;