import express from 'express'
import { getdata,setdata } from '../controller/UserController.js'
const Router =express.Router()
Router.post("/movie",getdata)
Router.get('/getdata',setdata)
export default Router