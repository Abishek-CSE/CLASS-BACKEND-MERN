import express from 'express'
import { HashValue } from '../controller/HashController.js'
const HashPass = express.Router()
HashPass.post("/hashpass",HashValue)
export default HashPass



//http://localhost:5000/api/pass/hashpass