import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AppRouter from './router/AppRouter.js'
import ConnectDb from './config/db.js'
dotenv.config()
ConnectDb()
const app =express()
const port =process.env.port || 5000
app.use(cors())
app.use(express.json())
app.use("/api/formdata",AppRouter)
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})

//http://localhost:5000/api/formdata/getdata