import express from 'express'
import dotenv from 'dotenv'
import requestRoute from './routes/authRoute.js'
import cors from 'cors'
dotenv.config()
const app =express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use('/api/users',requestRoute)
app.listen(port,()=>{
    console.log(`Server is Running http://localhost:${port}`);
})


//http://localhost:5000/api/users/createdata