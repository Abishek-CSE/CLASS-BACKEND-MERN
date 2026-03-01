import mongoose from "mongoose";
const formdata = new mongoose.Schema({
    name:{type:String},
    department:{type:String},
    password:{type:String}
},{timestamps:true})
const saveformdata = mongoose.model("FORM DATA",formdata)
export default saveformdata






