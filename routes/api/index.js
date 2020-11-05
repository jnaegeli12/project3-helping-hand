const router = require("express").Router();
const orgRoutes = require("./all");
const foodRoutes = require("./food");
const shelterRoutes = require("./shelter");
const healthRoutes = require("./health");
const dailyRoutes = require("./daily");

// Book routes
router.use("/all", orgRoutes);
router.use('/food', foodRoutes);
router.use('/shelter', shelterRoutes);
router.use('/health_care', healthRoutes);
router.use('/daily_care', dailyRoutes);

module.exports = router;