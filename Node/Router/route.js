import express from 'express'
import { addNewUser, readUser } from '../Controller/Controller.js'

const route = express.Router()

route.get('/',readUser)

route.post("/",addNewUser)

export default route