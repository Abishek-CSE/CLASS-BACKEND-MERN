export const getdata =(req,res)=>{
    const {Name}=req.body
    if(Name === "Abishek"){
        res.status(200).send("Yes The Name is Abishek")
    }
}
export const jsondata =(req,res)=>{
    const {userid} =req.params
    const datas =[{id:1,Name:"React"},{id:2,Name:"NodeJS"},{id:3,Name:"ExpressJS"}]
    if(userid == 1){
        console.log(datas)
        res.status(200).json({
            success:true,
            message:"Data Fetched",
            userdata:datas
        })
    }  else{
            res.status(404).json({
                msg:"No iAm Not Sendng Data"

            })
        }
        
    }
