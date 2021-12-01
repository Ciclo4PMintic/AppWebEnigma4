const router = require("express").Router();
const routeProject = require("./project");
const routeUser = require("./user");

router.use("/project", routeProject);
router.use("/user", routeUser);

module.exports = router;
