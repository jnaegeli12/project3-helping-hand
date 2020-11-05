const router = require("express").Router();
const dbModel = require("../../db");

// Matches with "/api/health_care"
router.route("/")
  .get(dbModel.selectAllHealth);

module.exports = router;