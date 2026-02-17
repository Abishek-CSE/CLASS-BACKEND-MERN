import mongoose from "mongoose";
const data =async()=>{
    try{
        const user =await mongoose.connect(process.env.Driver_link)
        console.log(`DataBase Connection Sucessfully ${user.connection.host}`)
    }
    catch(error){
        console.log(error);
    }
}
export default data