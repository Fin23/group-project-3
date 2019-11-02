const router = require("express").Router();
const profileController = require("../../controllers/profileController.js");

// Matches with "/api/profile"
router.route("/")
  .post(profileController.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

module.exports = router;
