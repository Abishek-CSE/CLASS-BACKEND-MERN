import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Router1 from './routes/AppRouter.js'
import connectDb from './config/db.js'
dotenv.config()
connectDb()
const app =express()
app.use(cors())
app.use(express.json())
const port = process.env.port || 5000
app.use("/api/database",Router1)
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})  
//http://localhost:5000/api/database/department

//district_name : string
//department : string
//subcategory : string
//memeber_Count : number
//department_code : number
//status : 
//updated_by :
//created_by :
//timesstamps