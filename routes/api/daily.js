const router = require("express").Router();
const dbModel = require("../../db");

// Matches with "/api/daily_care"
router.route("/")
  .get(dbModel.selectAllDaily);

module.exports = router;