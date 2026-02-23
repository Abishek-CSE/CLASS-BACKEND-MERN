import department_model from "../model/DataModel.js";
export const getdata =async(req,res)=>{
try{
        const add =await department_model.create(req.body)
        if(add){
            res.status(201).json({msg:"Successfully Added",add})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }
    }
    catch(error){
        console.log(error);
    }
}
    
export const givedata =async(req,res)=>{
    try{
        const  givedata = await department_model.find()
        if(givedata){
            res.status(201).json({msg:"Successfully Read",givedata})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }
    }
    catch(error){
        console.log(error);
        
    }
}
export const givebyiddata=async(req,res)=>{
    try{
        const givebyiddata = await department_model.findById(req.params.userid)
        if(givebyiddata){
            res.status(201).json({msg:"Successfully Read By ID",givebyiddata})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }
    }
    catch(error){
        console.log(error);
        
    }
}
export const givebyidandupdatedata =async(req,res)=>{
    try{
        const givebyidandupdatedata = await department_model.findByIdAndUpdate(req.params.userid,req.body)
        if(givebyidandupdatedata){
            res.status(201).json({msg:"Updated Successsfully",givebyidandupdatedata})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }
    }
    catch(error){
        console.log(error);
        
    }
}
export const deletedata =async(req,res)=>{
    try{
        const deletedata =await department_model.findByIdAndDelete(req.params.userid)
        if(deletedata){
            res.status(201).json({msg:"Deleted Successsfully",deletedata})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }

    }
    catch(error){
        console.log(error);
        
    }
}