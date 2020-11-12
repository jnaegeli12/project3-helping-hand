import React, { useState, useEffect } from "react";
import API from '../utils/API'

function DailyCard() {

const [daily, setDaily] = useState([]);

  useEffect(() => {
    API.getDaily()
    .then(res => {
      console.log("res form api call: ", res);
      setDaily(res.data)
    })
    .catch((err) => console.log(err));
  }, []); 

  return (
<div>
{daily.map(dailyOrgs => (
  <div className="card text-white bg-dark mb-3" >
    <div className="card-body" key={dailyOrgs.phone_number}>
     <h3>{dailyOrgs.name}</h3>
     <h5>{dailyOrgs.address}, {dailyOrgs.city} {dailyOrgs.state}</h5>
     <h3>Phone: {dailyOrgs.phone_number}</h3>
     <p>{dailyOrgs.description}</p>
     <a className="text-white" href={dailyOrgs.website}>{dailyOrgs.website}</a>
    </div>
  </div>
))}
</div>
  );
}
export default DailyCard;