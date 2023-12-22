import express from 'express'
import router from './router'
import * as dotenv from 'dotenv'
import session from 'express-session'
import { createUser, signInUser, protection } from './handlers/user'
import { verifyToken } from './modules/auth'

dotenv.config()

const app = express()

app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.use('/api', protection, verifyToken, router)

app.post('/signup', createUser)
app.get('/signin', signInUser)

export default app