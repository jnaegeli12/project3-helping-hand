import React, { useState, useEffect } from "react";
import API from '../utils/API'

function FoodCard() {

const [food, setFood] = useState([]);

  useEffect(() => {
    API.getFood()
    .then(res => {
      console.log("res form api call: ", res);
      setFood(res.data)
    })
    .catch((err) => console.log(err));
  }, []); 

  return (
<div>
{food.map(foods => (
  <div className="card text-white bg-dark mb-3" >
    <div className="card-body" key={foods.phone_number}>
     <h3>{foods.name}</h3>
     <h5>{foods.address}, {foods.city} {foods.state}</h5>
     <h3>Phone: {foods.phone_number}</h3>
     <p>{foods.description}</p>
     <a className="text-white" href={foods.website}>{foods.website}</a>
    </div>
  </div>
))}
</div>
  );
}
export default FoodCard;