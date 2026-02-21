import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Router from './routes/AppRouter.js'
import connectDB from './config/db.js'
dotenv.config()
connectDB()
const app =express()
const port = process.env.PORT ||5000
app.use(cors())
app.use(express.json())
app.use("/api/moviedetails",Router)
app.listen(port,()=>{
    console.log(`SERVER IS RUNNING http://localhost:${port}`);
})

//INSERT API -    http://localhost:5000/api/moviedetails/movie
//FIND API -      http://localhost:5000/api/moviedetails/getdata