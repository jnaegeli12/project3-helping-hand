const router = require("express").Router();
const orgRoutes = require("./orgs");

// Book routes
router.use("/results", orgRoutes);

module.exports = router;