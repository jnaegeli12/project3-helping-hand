const router = require("express").Router();
const dbModel = require("../../db");

// Matches with "/api/shelter"
router.route("/")
  .get(dbModel.selectAllShelter)

module.exports = router;