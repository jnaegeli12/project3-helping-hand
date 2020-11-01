const router = require("express").Router();

router.get("/results", function(req, res) {
    res.render('results');
});

router.get("/submit", function(req, res) {
    res.render('submit');
});