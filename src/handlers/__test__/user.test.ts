import { prismaMock } from './singleton';
import { createUser, signInUser, protection } from '../user';
import { createJWT, hashPassword } from '../../modules/auth'
import '../../dotenv'

describe('User Prisma test', () => {
    test('Should create a new user', async () => {
        const userData = {
           body : {
            id: 'someId',
            createdAt: new Date(),
            username: 'Jack',
            password: 'SomeStrongPassword'
           }
        }

        const res = {
            json(obj){
               return obj
            }
        }

        prismaMock.user.create.mockResolvedValue(userData.body)

        await expect(createUser(userData, res)).resolves.toEqual({
            authorized: createJWT(userData.body)
        })
    })

    test('Should sign user', async () => {
        const userData = {
           body : {
            id: 'someId',
            createdAt: new Date(),
            username: 'Jack',
            password: 'SomeStrongPassword'
           }
        }

        const res = {
            json(obj){
               return obj
            }
        }

        prismaMock.user.findUnique.mockResolvedValue(userData.body)

        await expect(signInUser(userData, res)).resolves.toEqual({
            authorized: createJWT(userData.body)
        })
    })
    
    test('Should check user authorization', () => {
        const req = {
            headers : {
                authorization : undefined
            }
        }
        const res = {
            json(obj){
                return obj
            }
        }

        const next = () => {return}

        expect(protection(req, res, next)).toEqual({
            message : 'Unauthorized'
        })
    })
})