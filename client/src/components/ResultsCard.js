import React, { useState, useEffect } from "react";
import API from '../utils/API'

function ResultsCard() {

const [org, setOrganization] = useState([])

  useEffect(() => {
    API.getAll()
    .then(res => {
      console.log("res form api call: ", res);
      setOrganization(res.data)
    })
    .catch((err) => console.log(err));
  }, []); 

  return (
    <div>
      {org.map(orgs => (
        <div className="card text-white bg-dark mb-3" >
          <div className="card-body" key={orgs.phone_number}>
            <h3>{orgs.name}</h3>
            <h5>{orgs.address}, {orgs.city}, {orgs.state} {orgs.zip}</h5>
            <h3>Phone: {orgs.phone_number}</h3>
            <a className="text-white" href={orgs.website}>{orgs.website}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ResultsCard;