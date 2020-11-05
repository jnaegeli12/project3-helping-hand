const router = require("express").Router();
const dbModel = require("../../db");

// Matches with "/api/food"
router.route("/")
  .get(dbModel.selectAllFood);

module.exports = router;