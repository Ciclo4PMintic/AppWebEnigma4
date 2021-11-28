const router = require('express').Router();
const routeProject = require('./project')

router.use('/project',routeProject);


module.exports = router;