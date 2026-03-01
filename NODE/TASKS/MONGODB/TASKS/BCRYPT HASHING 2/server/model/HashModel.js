import mongoose from 'mongoose'
const hashvalue =new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true})

const hashmodel =mongoose.model('hashpassword',hashvalue)
export default hashmodel