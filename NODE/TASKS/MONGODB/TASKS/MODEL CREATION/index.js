import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Router1 from './routes/AppRoutes.js'
import ConnectDB from './config/db.js'
dotenv.config()
ConnectDB()
const app =express()
const port =process.env.port
app.use(cors())
app.use(express.json())
app.use("/api/users",Router1)
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})


//INSERT API - http://localhost:5000/api/users/users