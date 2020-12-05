const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3301;
const bcrypt = require('bcrypt');
const connection = require('./config/connection');
const orm = require("./config/orm");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/api/organizations", (req, res) => {
  let col = []
  let val = []

 for(const column in req.body){
   col.push(column)
   val.push(req.body[column])
 }
 orm.createOrg(col, val, (cb) => {
   console.log(cb)
   res.status(201).json({});
 })
 

});

//routes for user auth
app.post("api/users", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    connection.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
 
  app.get('api/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query(
      'SELECT * FROM users where username = ?',
      username,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
                req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.json({ message: 'Wrong Username/Password!'})
            }
          });
        } else {
            res.send({ message: "User Doesn't exist" }); 
          }
      }  
    );
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