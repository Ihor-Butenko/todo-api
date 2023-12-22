import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

export const createJWT = (user) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret is not defined.');
    }
    const token = jwt.sign({
        id: user.id,
        password: user.password
    }, process.env.JWT_SECRET)

    return token
}

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 5)
}

export const comparePassowrds = async (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const verifyToken = async (req, res, next) => {
    const bearer = req.headers.authorization
    const [, token] = bearer.split(' ')

    try{

        if(!process.env.JWT_SECRET) throw new Error('No JWT_SECRET')

        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    }catch(e){
        console.error(e)
        res.status(401)
        res.json({message : 'Not valid authorization token'})
        return
    }
}