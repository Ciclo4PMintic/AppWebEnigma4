const Project = require('../models/project')

createProject= async (project)=>{
    let projectInstance = new Project(project)
    projectInstance.save()
}

getProjects = async () =>{
    projects = await Project.find({})
    return projects
}

getProjectById = async (projectId) =>{
    project = await Project.findById(projectId).exec()
    return project
}

updateProject = async(projectId, project) =>{
    new_project = await Project.findByIdAndUpdate(projectId, project,{new: true})
    return new_project
}

deleteProject = async (projectId) =>{
    return  Project.findByIdAndDelete(projectId)
}


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
}