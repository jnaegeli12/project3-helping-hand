const express = require('express')
const path = require('path')

const router = express.Router();

const help = require('../models')


router.get("/submit", function(req, res) {
    res.render('submit');
});



router.get('/api/food', function(req, res) {
    
    help.selectAllFood(function(data) {
        res.json(data)
        console.log(data);

    });
});

router.get('/api/shelter', function(req, res) {
    help.selectAllShelter(function(data) {
        res.json(data)
        console.log(data);

    });
});
router.get('/api/health_care', function(req, res) {
    help.selectAllHealth_care(function(data) {
        res.json(data)
        console.log(data);

    });
});
router.get('/api/daily_care', function(req, res) {
    help.selectAllDaily_care(function(data) {
        res.json(data)
        console.log(data);

    });
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
  app.post("/api/users", (req, res) => {
    let col = []
    let val = []
    
  
   for(const column in req.body){
     col.push(column)
     val.push(req.body[column])
   }
  
   console.log(col)
   console.log(val)
   orm.createUser(col, val, function (cb) {
     console.log(cb)
     res.status(201).json({});
   })
   
  
  });
  

router.get("/", function(req, res) {
    res.render('index');
});
module.exports = router;