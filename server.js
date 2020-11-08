
const express = require("express");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3301;
const orm = require("./db");

// Define middleware here
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  router.use(express.static("client/build"));
}
// Add routes, both API and view
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

app.post("/api/all", (req , res) => {
  orm.createOrg(function(result) {
    res.json(result);
  })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

module.exports = router;