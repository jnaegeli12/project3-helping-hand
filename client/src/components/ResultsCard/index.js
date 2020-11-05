import React from "react";
//header can be orginization type i.e health, shelter...
//Card title can be the name of the orginization it self
// ahref can be the link to there website, can add p tag if we want to add discreitption


function ResultCard() {
  return (
      <div>

<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <a className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</a>
  </div>
</div>
</div>
  );
}
export default ResultCard;