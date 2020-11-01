const router = require('express').Router();
const db = require('../db');

//api routes
router.get('api/all', function(req, res) {
    db.findAll(function(data) {
        res.json(data);
        console.log(data);
    })
})

router.get('/api/food', function(req, res) {
    db.selectAllFood(function(data) {
        res.json(data)
        console.log(data);
    });
});

router.get('/api/shelter', function(req, res) {
    db.selectAllShelter(function(data) {
        res.json(data)
        console.log(data);
    });
});

router.get('/api/health_care', function(req, res) {
    db.selectAllHealth(function(data) {
        res.json(data)
        console.log(data);
    });
});

router.get('/api/daily_care', function(req, res) {
    db.selectAllDaily(function(data) {
        res.json(data)
        console.log(data);

    });
});

router.post('api/organization', function(req, res) {
    db.createOrg([
        'name',
        'address',
        'city',
        'state',
        'zip',
        'phone',
        'website',
        'food_bank',
        'served_meal',
        'immediate_shelter',
        'longterm_shelter',
        'urgent_care',
        'dental',
        'mental',
        'daily_care',
        'description',
        'age_min',
        'age_max'
    ],
    [
        req.body.name,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.zip,
        req.body.phone,
        req.body.website,
        req.body.food_bank,
        req.body.served_meal,
        req.body.immediate_shelter,
        req.body.longterm_shelter,
        req.body.urgent_care,
        req.body.dental,
        req.body.mental,
        req.body.daily_care,
        req.body.description,
        req.body.age_min,
        req.body.age_max
    ], function(results) {
     //giving an id to each company who choses to added ther company information
        res.json({id: results.insertId})
    }); 
});

router.get("/", function(req, res) {
    res.render('index');
});
module.exports = router;