import express from 'express';
import { connectDB } from './configs/dbConfig.js';
import { getCourseById, getCourses } from './controllers/publicviewController.js';
import { loginUser, registerUser } from './controllers/authController.js';
import cors from 'cors';
import { getAllUsers, getUserById, addUser, updateUserById, deleteUserById} from "./controllers/userController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "Yoga Center API is running..." });
});

app.get("/courses",getCourses);

app.get("/courses/:id",getCourseById);

app.post("/signup",registerUser);

app.get("/login",loginUser);







app.get("/users",getAllUsers);
app.get("/users/:id",getUserById);
app.post("/users",addUser);
app.put("/users/:id",updateUserById);
app.delete("/users/:id",deleteUserById);





app.listen(5000,()=>{
    connectDB();
});