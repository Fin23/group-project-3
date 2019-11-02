const router = require("express").Router();
const jobRoutes = require("./jobs");
const profileRoutes = require("./profile")

// Job routes
router.use("/jobs", jobRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
