import http from 'http'
const app =http.createServer()
app.listen(3000,()=>{
    console.log(`The Server is running in https://localhost:3000`);
    
})
