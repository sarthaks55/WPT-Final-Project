import express from 'express';
import { connectDB } from './configs/dbConfig.js';
import { getCourseById, getCourses } from './controllers/publicviewController.js';
import { loginUser, registerUser } from './controllers/authController.js';
import { getAllUsers, getUserById, addUser, updateUserById, deleteUserById} from "./controllers/userController.js";
import { addCourse, deleteCourseById, updateCourse } from './controllers/courseController.js';

const app = express();
app.use(express.json());

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




app.get("/courses",getCourses);
app.get("/courses/:id",getCourseById);
app.post("/courses",addCourse);
app.put("/courses/:id",updateCourse);
app.delete("/courses/:id",deleteCourseById);





app.listen(4500,()=>{
    connectDB();
});