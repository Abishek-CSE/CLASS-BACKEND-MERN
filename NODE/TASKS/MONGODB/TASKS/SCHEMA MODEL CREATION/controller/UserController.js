import moviedatamodel from "../model/MovieDataModel.js";
export const getdata =async(req,res)=>{
    try{
        const add =await moviedatamodel.create(req.body)
        if(add){
            res.status(201).json({msg:"Successfully Added"})
        }
        else{
            res.status(404).json({msg:"Rejected Succesfully"})
        }
    }
    catch(error){
        console.log(error);
    }
}
export const setdata =async(req,res)=>{
    try{
        const setdata =await moviedatamodel.find()
        if(setdata){
            return res.status(200).json({Mydat:setdata})
        }
    }
    catch(error){
        console.log("The Error",error);
        
    }
}