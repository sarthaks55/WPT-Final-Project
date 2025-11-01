import express from 'express';

const app = express();

app.get("/",(request,response)=>{
    response.send({message:"I am yash"});
})

app.listen(4500);