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

  function showType(orgs) {
    switch (orgs) {
      case orgs.food_bank: return "food";
      case orgs.immediate_shelter || orgs.longterm_shelter === 1: return <img src="../../public/assets/shelter-icon.png" alt="shelter"></img>;
      case orgs.urgent_care || orgs.mental || orgs.dental === 1: return <img src="../../public/assets/health-icon.png"alt="health"></img>;
      case orgs.daily === 1: return <img src="../../public/assets/daily-icon.png"alt="daily care"></img>;
      default: return <img src={'./assets/health-icon.png'} alt="shelter"></img>;
    }
  }

  return (
    <div>
      {org.map(orgs => (
        <div className="card text-white bg-dark mb-3" >
          <div className="card-body" key={orgs.id}>
            <div className="d-flex w-100 justify-content-between">
              <h3>{orgs.name}</h3>
              <small>{orgs.food_bank} {orgs.served_meal} {orgs.immediate_shelter} {orgs.longterm_shelter} {orgs.urgent_care} {orgs.mental} {orgs.dental} {orgs.daily}</small>
              <p>{showType(orgs)}</p>
            </div>
            <h5>{orgs.address}, {orgs.city}, {orgs.state} {orgs.zip}</h5>
            <h3>Phone: {orgs.phone_number}</h3>
            <p>{orgs.description}</p>
            <a className="text-white" href={orgs.website}>Learn more at: {orgs.website}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ResultsCard;