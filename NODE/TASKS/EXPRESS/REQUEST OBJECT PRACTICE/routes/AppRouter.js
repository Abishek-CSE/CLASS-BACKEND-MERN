import express from 'express'
import { getdata, jsondata } from '../controller/AppController.js'
const Router =express.Router()
Router.post("/userdata",getdata)
Router.get("/jsondata",jsondata)
export default Router

//http://localhost:5000/api/users/userdata
//http://localhost:5000/api/users/jsondata