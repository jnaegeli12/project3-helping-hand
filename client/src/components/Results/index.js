import React, { useState, useEffect } from "react";
import API from '../../utils/API';

function ResultsCard() {
const [org, setOrganization] = useState([]);

  useEffect(() => {
    API.getAll()
    .then(res => {
      setOrganization(res.data);
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
      {org.map(orgs => (
        <div className="card text-white bg-dark mb-3" key={orgs.id}>
          <div className="card-body">
            <div className="d-flex w-100 justify-content-between">
              <h3>{orgs.name}</h3>
              <span id="icons">{showFood(orgs)} {showShelter(orgs)} {showHealth(orgs)} {showDaily(orgs)}</span>
            </div>
            <h5>{orgs.address}, {orgs.city}, {orgs.state} {orgs.zip}</h5>
            <h3>Phone: {orgs.phone_number}</h3>
            <p>{orgs.description}</p>
            <div className="d-flex w-100 justify-content-between">
              <a className="text-white" href={orgs.website}>Learn more at: {orgs.website}</a>
              <button className="btn btn btn-light">Add to Favorites</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultsCard;