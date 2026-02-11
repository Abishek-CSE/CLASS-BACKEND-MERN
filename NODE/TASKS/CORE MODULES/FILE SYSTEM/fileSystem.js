import fs from 'fs'
//create fileystem 
fs.writeFile("Demo.txt","Welcome to Node World",(err)=>{
    if(err){
        console.log("File Created Failed");
        return
    }
    console.log("File Created Successfully");
})

//read the filesystem
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Read File Failed");
        return
    }
    console.log("The Information is:" ,data);
})

//update the file system
fs.appendFile('demo.txt',' This is very Easy to learn',(err,data)=>{
    if(err){
        console.log("Update Failed");
        return
    }
    console.log("Updated Information:",data);
})

//Delete the file System
fs.unlink('demo.txt',(err)=>{
    if(err){
        console.log("Delete Failed");
        return
    }
    console.log("File Delete Successfully");
    
})