import React, { useState, useEffect } from "react";
import API from '../utils/API'

function FoodCard() {

  const [food, setFood] = useState([]);

  useEffect(() => {
    API.getFood()
    .then(res => {
      setFood(res.data)
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
{food.map(foods => (
  <div className="card text-white bg-dark mb-3" key={foods.id}>
    <div className="card-body">
      <div className="d-flex w-100 justify-content-between">
        <h3>{foods.name}</h3>
        <span id="icons">{showFood(foods)} {showShelter(foods)} {showHealth(foods)} {showDaily(foods)}</span>
      </div>     
     <h5>{foods.address}, {foods.city} {foods.state}</h5>
     <h3>Phone: {foods.phone_number}</h3>
     <p>{foods.description}</p>
     <div className="d-flex w-100 justify-content-between">
        <a className="text-white" href={foods.website}>Learn more at: {foods.website}</a>
        <button className="btn btn btn-light">Add to Favorites</button>
      </div>
    </div>
  </div>
))}
</div>
  );
}
export default FoodCard;