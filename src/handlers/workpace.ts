import prisma from '../db'

export const getAllWorkspaces = async (req, res) => {
    const fullUser = await prisma.user.findUnique({
        where : {
            id : req.user.id,
            username : req.user.username
        },
        include: {
            Workspace: true
        }
    })
    res.json({data : fullUser?.Workspace})
}

export const getWorkspace = async (req, res) => {
    const id = req.params.id
    const workspace = await prisma.workspace.findFirst({
        where : {
            id,
            authorId : req.user.id
        }
    })
    
    res.json({data : workspace})
}

export const createWorkspace = async (req, res) => {
    const newWorkspace = await prisma.workspace.create({
        data : {
            name : req.body.name,
            authorId : req.user.id
        }
    })
    
    res.json({data : newWorkspace})
}

export const updateWorkspace = async (req, res) => {
    const id = req.params.id
    const updatedWorkspace = await prisma.workspace.update({
        where : {
            id,
            authorId : req.user.id
        },
        data : {
            name : req.body.name
        }
    })

    res.json({data : updatedWorkspace})
}

export const deleteWorkspace = async (req, res) => {
    const id = req.params.id
    const deletedWorkspace = await prisma.workspace.delete({
        where : {
            id,
            authorId : req.user.id
        }
    })
    
    res.json({message : "Workspace deleted!"})
}