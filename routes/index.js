const express = require("express");
const router = express.Router();
const app = express();
const orm = require("../config/orm");

router.get("/api/all", (req, res) => {
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