const passport = require("passport");
const express = require("express");
const session = require(`express-session`);
const router = express.Router();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3301;
const orm = require("./config/orm");
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "helpinghand", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

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

app.post("/api/users", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

// app.get("api/users/", (req, res) => {
//   console.log(req.body);

//   orm.getProfile(function(result) {
//     console.log("Result: " + result);
//     res.json(result);
//   })
// })

app.post("/api/organizations", (req, res) => {
  let col = []
  let val = []

  for (const column in req.body){
    col.push(column)
    val.push(req.body[column])
  }
  orm.createOrg(col, val, (cb) => {
    console.log(cb)
    res.status(201).json({});
  })
});

app.post("/api/users", (req, res) => {
  let col = []
  let val = []
  
  for(const column in req.body){
    col.push(column)
    val.push(req.body[column])
  }

  orm.createUser(col, val, function (cb) {
    console.log(cb)
    res.status(201).json({});
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

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });
});

module.exports = router;