
const express = require("express");
const router = express.Router();
const path = require("path");
const hand = require("./db/hand");
const app = express();
const PORT = process.env.PORT || 3301;
const orm = require("./db/orm");

// Define middleware here
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// API routes
app.get("/api/all", (req, res) => {
  orm.selectAll(function(result) {
    res.json(result);
  })
});

app.get("/api/food", (req, res) => {
  orm.selectAllFood(function(result) {
    res.json(result);
  })
});

app.get("/api/food/range", (req, res) => {
  orm.selectFoodRange(function(result) {
    res.json(result);
  })
});

app.get("/api/shelter", (req, res) => {
  orm.selectAllShelter(function(result) {
    res.json(result);
  })
});

app.get("/api/health", (req, res) => {
  orm.selectAllHealth(function(result) {
    res.json(result);
  })
});

app.get("/api/daily", (req, res) => {
  orm.selectAllDaily(function(result) {
    res.json(result);
  })
});

app.post("/api/organizations", (req, res) => {
  hand.createOrg([
    "name",
    "address",
    "city",
    "state",
    "zip",
    "phone_number",
    "website",
    "served_meal",
    "food_bank",
    "immediate_shelter",
    "longterm_shelter",
    "urgent_care",
    "dental",
    "mental",
    "daily",
    "description",
    "age_min",
    "age_max",
    "male",
    "female",
    "family_youth"
], [
    req.query.name,
    req.query.address,
    req.query.city,
    req.query.state,
    req.query.zip,
    req.query.phone_number,
    req.query.website,
    req.query.served_meal,
    req.query.food_bank,
    req.query.immediate_shelter,
    req.query.longterm_shelter,
    req.query.urgent_care,
    req.query.dental,
    req.query.mental,
    req.query.daily,
    req.query.description,
    req.query.age_min,
    req.query.age_max,
    req.query.male,
    req.query.female,
    req.query.family_youth
], function (result) {
    console.log("server results: " + result);
    res.json(result);
})
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

module.exports = router;