import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import Router from './routes/AppRouter.js'
dotenv.config()
const app =express()
app.use(cors())
app.use(express.json())
app.use("/api/users",Router)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})