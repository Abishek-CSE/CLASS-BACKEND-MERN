import express from 'express'
import { deletedata, getdata, givebyidandupdatedata, givebyiddata, givedata } from '../controller/UserController.js'
const Router = express.Router()
Router.post("/department",getdata)
Router.get('/get',givedata)
Router.get('/getbyid/:userid',givebyiddata)
Router.put('/getbyidandupdate/:userid',givebyidandupdatedata)
Router.put('/deletedata/:userid',deletedata)
export default Router