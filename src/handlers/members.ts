import prisma from '../db'

export const getAllWorkspaceMembers = async (req, res) => {
    const id = req.params.workspaceId
    const members = await prisma.workspace.findUnique({
        where : {
            id
        },
        include : {
            MemberWorkpace : true
        }     
    })
    
    res.json({message : members?.MemberWorkpace})
} 

export const getMember = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const memberId = req.params.memberId

    const member = await prisma.memberWorkpace.findFirst({
        where : {
            workSpaceId : workspaceId,
            MemberId : memberId
        }    
    })
    
    const fullMember = await prisma.user.findFirst({
        where : {
            id: member?.MemberId
        }
    })

    res.json({message : fullMember?.username})
} 

export const addMember = async (req, res) => {
    const workspaceId = req.params.workspaceId

    const newMember = await prisma.memberWorkpace.create({
        data : {
            workSpaceId : workspaceId,
            MemberId : req.body.id
        }
    })

    if(newMember) res.json({message : 'New member added succesfully!'})
}

export const removeMember = async (req, res) => {
    const workspaceId = req.params.workspaceId
    const memberId = req.params.memberId

    const memberID = await prisma.memberWorkpace.findFirst({
        where : {
            workSpaceId : workspaceId,
            MemberId : memberId
        }
    })

    const removeMember = await prisma.memberWorkpace.delete({
        where : {
            id : memberID?.id
        }
    })

    if(removeMember) res.json({message : 'Member deleted succesfully!'})
}