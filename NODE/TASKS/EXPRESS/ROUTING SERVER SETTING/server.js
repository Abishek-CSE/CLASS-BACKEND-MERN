import express from 'express'
import dotenv from 'dotenv'
import authRoute from './Routes/authRoutes.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT_NUMBER || 5000
app.use("/api/users",authRoute)
app.use(cors())
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Server is Running http://localhost:${PORT}`);
    
})

//Local host http://localhost:5000/api/users/userdata

