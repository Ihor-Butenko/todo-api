import prisma from '../db'

export const getAllDashboards = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const dashboards = await prisma.dashboard.findMany({
        where : {
            workspaceId
        }
    })
    res.json({message : dashboards})
}

export const getSignleDashboard = async (req, res) => {
    const id = req.params.dashboardId
    const workspaceId = req.params.workspaceId
    const dashboard = await prisma.dashboard.findUnique({
        where : {
            id,
            workspaceId
        }
    })
    res.json({message : dashboard})
}

export const createDashboard = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const newDashboard = await prisma.dashboard.create({
        data : {
            name : req.body.name,
            workspaceId
        }
    })
    res.json({message : newDashboard})
}

export const updateDashboard = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const id = req.params.dashboardId
    const updatedDashboard = await prisma.dashboard.update({
        where : {
            id,
            workspaceId
        },
        data : {
            name : req.body.name
        }
    })
    res.json({message : updatedDashboard})
}

export const deleteDashboard = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const id = req.params.dashboardId
    const updatedDashboard = await prisma.dashboard.delete({
        where : {
            id,
            workspaceId
        }
    })
    res.json({message : updatedDashboard})
}