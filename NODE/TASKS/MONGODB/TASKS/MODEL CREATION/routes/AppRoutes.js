import express from 'express'
import { getdata } from '../controller/UserController.js'
const Router = express.Router()
Router.post("/users",getdata)
export default Router