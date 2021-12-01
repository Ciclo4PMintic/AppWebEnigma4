const router = require("express").Router();
const routeProject = require("./project");
const routeUser = require("./user");
const routeRole = require("./role");

router.use("/project", routeProject);
router.use("/user", routeUser);
router.use("/role", routeRole);

module.exports = router;
