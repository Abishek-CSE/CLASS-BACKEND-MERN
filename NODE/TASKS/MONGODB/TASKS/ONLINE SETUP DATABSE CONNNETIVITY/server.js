import express from 'express'
import dotenv from 'dotenv'
import data from './config/db.js'
dotenv.config()
data()
const app =express()
const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
    
})