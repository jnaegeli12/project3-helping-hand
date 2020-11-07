
const express = require("express");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;
const dbModel = require("./db");
const controller = require("./controller/controller");

// Define middleware here
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  router.use(express.static("client/build"));
}
// Add routes, both API and view
app.get("/api/all", (req, res) => {
  res.json('all results')
});

app.get("/api/food", (req, res) => {
  res.json('food works')
});

app.get("/api/shelter", (req, res) => {
  res.json('shelter works');
});

app.get("api/healthcare", (req, res) => {
  res.json('health works');
});

app.get("api/dailycare", (req, res) => {
  res.json('daily works');
});

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

module.exports = router;