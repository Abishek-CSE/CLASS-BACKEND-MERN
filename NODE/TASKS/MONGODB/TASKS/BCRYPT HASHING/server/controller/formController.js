import saveformdata from "../model/FormModel.js";
import bcrypt from 'bcrypt'
export const getdata =async(req,res)=>{

    console.log(req);
    
    try{
        const {name,department,password}= req.body
        const saltround =10
        const hashpassword =await bcrypt.hash(password,saltround)
        const add = await saveformdata.create({name,department,password:hashpassword})
        res.status(201).json({msg:"Successfully Created"},add)
    }catch(error){
        console.log(error);
    }
}

export const givedata =async(req,res)=>{
    try{
        const add = await saveformdata.find()
        res.status(201).json({msg:"Successfully Read Data"})
    }catch(error){
        console.log(error);
    }
}
export const givebyid =async(req,res)=>{
    try{
        const add = await saveformdata.findById(req.params.userid)
        res.status(201).json({msg:"Successfully Read by id"})
    }catch(error){
        console.log(error);
    }
}
export const givebyidandupdate  =async(req,res)=>{
    try{
        const add = await saveformdata.findByIdAndUpdate(req.params.userid,req.body)
        res.status(201).json({msg:"Successfully Updated"})
    }catch(error){
        console.log(error);
    }
}
export const deletedata =async(req,res)=>{
    try{
        const add = await saveformdata.findByIdAndDelete(req.params.userid)
        res.status(201).json({msg:"Successfully Deleted"})
    }catch(error){
        console.log(error);
    }
}