const { Router } = require("express");

const {
  renderAboutMe,
  renderContactMe,
  renderProjects,
  renderHome,
  renderError,
} = require("../../controllers/view");

const router = Router();

router.get("/about-me", renderAboutMe);
router.get("/contact-me", renderContactMe);
router.get("/projects", renderProjects);
router.get("/", renderHome);
router.get("/*", renderError);

module.exports = router;
