import React, { useState, useEffect } from "react";
import API from '../utils/API'

function HealthCard() {

const [health, setHealth] = useState([]);

  useEffect(() => {
    API.getHealth()
    .then(res => {
      setHealth(res.data)
    })
    .catch((err) => console.log(err));
  }, []);

  function showFood(orgs) {
    if (orgs.served_meal === 1 || orgs.food_bank === 1) {
      return <img src="./assets/food-icon.png" width="50px" alt="food" />
    }
  }

  function showShelter(orgs) {
    if (orgs.immediate_shelter === 1 || orgs.longterm_shelter === 1) {
      return <img src="./assets/shelter-icon.png" width="50px" alt="shelter" />
    }
  }

  function showHealth(orgs) {
    if (orgs.urgent_care === 1 || orgs.mental === 1 || orgs.dental === 1) {
      return <img src="./assets/health-icon.png" width="50px" alt="health" />
    }
  }

  function showDaily(orgs) {
    if (orgs.daily === 1) {
      return <img src="./assets/daily-icon.png" width="50px" alt="daily" />
    }
  }

  return (
<div>
{health.map(healthOrgs => (
  <div className="card text-white bg-dark mb-3" >
    <div className="card-body" key={healthOrgs.phone_number}>
    <div className="d-flex w-100 justify-content-between">
        <h3>{healthOrgs.name}</h3>
        <span id="icons">{showFood(healthOrgs)} {showShelter(healthOrgs)} {showHealth(healthOrgs)} {showDaily(healthOrgs)}</span>
    </div>   
     <h5>{healthOrgs.address}, {healthOrgs.city} {healthOrgs.state}</h5>
     <h3>Phone: {healthOrgs.phone_number}</h3>
     <p>{healthOrgs.description}</p>
      <div className="d-flex w-100 justify-content-between">
        <a className="text-white" href={healthOrgs.website}>Learn more at: {healthOrgs.website}</a>
        <button className="btn btn btn-light">Add to Favorites</button>
      </div>
    </div>
  </div>
))}
</div>
  );
}
export default HealthCard;