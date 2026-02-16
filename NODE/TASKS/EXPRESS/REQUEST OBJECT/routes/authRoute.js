import express, { request } from 'express'
import { createData ,getdata,Querdata,HeadersData} from '../controller/userController.js'
const requestRoute =express.Router()
requestRoute.post("/createdata",createData)
requestRoute.get("/getdata/id",getdata)
requestRoute.get("/query",Querdata)
requestRoute.get("/headers",HeadersData)
export default requestRoute


//http://localhost:5000/api/users/createdata
//http://localhost:5000/api/users/getdata/id
//http://localhost:5000/api/users/query
//http://localhost:5000/api/users/headers