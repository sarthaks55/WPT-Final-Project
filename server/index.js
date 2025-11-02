import express from 'express';
import { connectDB } from './configs/dbConfig.js';

const app = express();

app.get("/",(request,response)=>{
    response.send({message:"I am yash"});
})













app.listen(4500,()=>{
    connectDB();
});