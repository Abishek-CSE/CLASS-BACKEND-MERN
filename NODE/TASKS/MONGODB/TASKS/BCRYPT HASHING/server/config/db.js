import mongoose from "mongoose";
const ConnectDb =async()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`DataBase Connected Successfully ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error);
        
    }
}
export default ConnectDb