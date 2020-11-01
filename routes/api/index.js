const router = require("express").Router();
const orgRoutes = require("./orgs");

// Organization routes
router.use("/orgs", orgRoutes);

module.exports = router;