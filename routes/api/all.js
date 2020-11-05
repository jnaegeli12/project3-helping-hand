const router = require("express").Router();
const dbModel = require("../../db");

// Matches with "/api/all"
router.route("/")
  .get(dbModel.findAll)
  .post(dbModel.createOrg)

module.exports = router;