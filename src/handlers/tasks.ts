import prisma from '../db'

export const getAllTasks = async (req, res) => {
    const dashboardId = req.params.dashboardId
    const tasks = await prisma.task.findMany({
        where : {
            dashboardId
        }
    })
    res.json({message : tasks})
}

export const getTask = async (req, res) => {
    const dashboardId = req.params.dashboardId
    const id = req.params.taskId
    const task = await prisma.task.findUnique({
        where : {
            id,
            dashboardId
        }
    })
    res.json({message : task})
}


export const createTask = async (req, res) => {
    const name = req.body.name
    const dashboardId = req.params.dashboardId
    const newTask = await  prisma.task.create({
        data : {
            name,
            dashboardId
        }
    })
    res.json({message : newTask})
}

export const updateTask = async (req, res) => {
    const name = req.body.name
    const dashboardId = req.params.dashboardId
    const id = req.params.taskId
    const updatedtask = await  prisma.task.update({
        where : {
            id,
            dashboardId
        },
        data : {
            name
        }
    })
    res.json({message : updatedtask})
}

export const deleteTask = async (req, res) => {
    const dashboardId = req.params.dashboardId
    const id = req.params.taskId
    const task = await prisma.task.delete({
        where : {
            id,
            dashboardId
        }
    })
    res.json({message : 'task deleted!'})
}