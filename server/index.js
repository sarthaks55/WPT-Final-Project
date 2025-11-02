import express from 'express';
import { connectDB } from './configs/dbConfig.js';
import { getCourseById, getCourses } from './controllers/publicviewController.js';
import { loginUser, registerUser } from './controllers/authController.js';
import cors from 'cors';



const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(request,response)=>{
    response.send({message:"I am yash"});
})

app.get("/courses",getCourses);

app.get("/courses/:id",getCourseById);

app.post("/signup",registerUser);

app.get("/login",loginUser);











app.listen(5000,()=>{
    connectDB();
});