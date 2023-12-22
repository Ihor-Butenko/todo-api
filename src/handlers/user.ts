import { createJWT, hashPassword, comparePassowrds } from '../modules/auth'
import prisma from '../db'

export const createUser = async (req, res) => {
    const hash = await hashPassword(req.body.password)
    
    const user = await prisma.user.create({
        data:{
            username: req.body.username,
            password: hash
        }
    })

    const newToken = createJWT(user)
    return res.json({authorized: newToken})
}

export const signInUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const newToken = createJWT(user)
    return res.json({ authorized: newToken })
}

export const protection = (req, res, next) => {
    const bearer = req.headers.authorization

    if(!bearer){
        return res.json({message: 'Unauthorized'})
        next()
    }

    next()
}
