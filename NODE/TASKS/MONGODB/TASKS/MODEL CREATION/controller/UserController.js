import moviedatamodel from "../model/movie.js"

export const getdata =async(req,res)=>{
    try {
        const add =await moviedatamodel.create(req.body)
        if(add){
            res.status(200).json({msg:"Successflly Connection"})
        }
        else{
            res.status(400).json({msg:"Not Connectde"})
        }
        
    } catch (error) {
        console.log(error)
    }
    
}