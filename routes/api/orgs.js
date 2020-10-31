const router = require("express").Router();
const handcontroller = require("../../controllers/handcontroller");

// Matches with "/api/index"
router.route("/orgs")
  .get(handcontroller.findAll)

router.route("/submit")
  .post(handcontroller.create);

// Matches with "/api/results/:id"
router
  .route("/results/:id")
  .get(handcontroller.findById)

module.exports = router;
