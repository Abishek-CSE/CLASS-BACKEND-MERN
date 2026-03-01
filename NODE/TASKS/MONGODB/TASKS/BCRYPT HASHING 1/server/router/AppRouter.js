import express from 'express'
import { deletedata, getdata, givebyid, givebyidandupdate, givedata } from '../controller/formController.js'
const AppRouter = express.Router()
AppRouter.post("/getdata",getdata)
AppRouter.get("/get",givedata)
AppRouter.get("/getbyid/:userid",givebyid)
AppRouter.put("/getbyupdata/:userid",givebyidandupdate)
AppRouter.put("/deletedata/:userid",deletedata)
export default AppRouter