export const createData =(req,res)=>{
    console.log(req.body);
}
export const getdata =(req,res)=>{
    console.log(req.params);
}
 export const Querdata =(req,res)=>{
    console.log(req.query);
}
 export const HeadersData =(req,res)=>{
    console.log(req.headers.jwtoken);
    
}