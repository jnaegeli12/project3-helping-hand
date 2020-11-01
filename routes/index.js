const path = require("path");
const express = require('express');
const app = express();
const router = express.Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes")

// API Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;