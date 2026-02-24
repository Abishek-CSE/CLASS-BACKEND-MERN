import saveformdata from "../model/FormModel.js";

export const getdata =async(req,res)=>{

    console.log(req);
    
    try{
        const add = await saveformdata.create(req.body)
        res.status(201).json({msg:"Successfully Created"})
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