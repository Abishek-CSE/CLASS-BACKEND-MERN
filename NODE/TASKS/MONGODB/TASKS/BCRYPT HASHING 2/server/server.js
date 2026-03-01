import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import HashRouter from './routes/HashRouter.js'
import connectDB from './config/db.js'
dotenv.config()
const app =express()
connectDB()
app.use(cors())
const port =process.env.port
app.use(express.json())
app.use("/api/pass",HashRouter)
app.listen(port ,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})

//http://localhost:5000/api/pass/