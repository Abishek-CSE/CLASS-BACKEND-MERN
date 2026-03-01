import hashmodel from "../model/HashModel.js";
import bcrypt from 'bcrypt'

export const HashValue =async(req,res)=>{
    try{
        const {name,email,password} =req.body
        const checkemail =await hashmodel.findOne({email})
        if(checkemail){
            return res.status(200).json({msg:"Check Successfully"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        const adddata = await hashmodel.create({name,email,password:hashpassword})
        res.status(200).json({msg:"Data Created",adddata})
    }
    catch(error){
        console.log("SomeThing Error",error);
    }
    
}