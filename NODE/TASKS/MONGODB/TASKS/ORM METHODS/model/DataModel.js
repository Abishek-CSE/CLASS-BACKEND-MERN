import mongoose from "mongoose";
const department = new mongoose.Schema({
district_name :{type:String} ,
department : {type:String},
subcategory :{type:String},
memeber_Count : {type:Number},
department_code :{type:Number},
status :{type:String ,default:"Active"},
updated_by :{type:String , default:"Admin"},
created_by :{type:String,default:"User"}
},{timestamps:true})
const department_model = mongoose.model("Department",department)
export default  department_model