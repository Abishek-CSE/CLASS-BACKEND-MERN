import mongoose from "mongoose";
const connectDB =async ()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDb Connected ${conn.connection.host}`);
    } catch (error) {
        console.log("something Error");
    }
}
export default connectDB