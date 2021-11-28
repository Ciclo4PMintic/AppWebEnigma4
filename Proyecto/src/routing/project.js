const router = require('express').Router()
const projectService = require('../services/project')

router.post('/', async (req, res) => {
    let projectCreated = await projectService.createProject(req.body)
    return res.status(201).json({ projectCreated })
})

router.get("/", async (req, res) => {
    let projects = await projectService.getProjects()
    return res.status(200).json({ projects })
})


router.get('/:id', async (req, res) => {
    let project = await projectService.getProjectById(req.params.id)
    return res.status(200).json({ project })
})

router.put('/:id', async (req, res) => {
    let new_project = await projectService.updateProject(projectId = req.params.id, project = req.body)
    return res.status(200).json({new_project})
})

router.delete('/:id', async (req,res)=>{
    await projectService.deleteProject(req.params.id)
    return res.status(204).json({})
})

module.exports = router;