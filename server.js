
const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3301;
const orm = require("./db");

// Define middleware here
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  })
};

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