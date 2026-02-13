import express from 'express'
import { UserData } from '../controller/userControl.js'
const Routing =express.Router()
Routing.post('/userdata',UserData)
export default Routing
