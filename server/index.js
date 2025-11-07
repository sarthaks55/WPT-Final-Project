import express from 'express';
import { connectDB } from './configs/dbConfig.js';
import { getContactUs, getCourseById, getCourses, postContactUs } from './controllers/publicviewController.js';
import { loginUser, registerUser } from './controllers/authController.js';
import cors from 'cors';
import { getAllUsers, getUserById, addUser, updateUserById, deleteUserById, getUserCoursesById, getUserSchedules, getAllUsersCount} from "./controllers/userController.js";
import { addCourse, deleteCourseById, getAllCourse, getAllCoursesCount, getCourseScheduledById, updateCourse } from './controllers/courseController.js';
import { verifyToken } from './middlewares/VerifyToken.js';
import { getAllCourseOfInstructorById, getAllInstructor, getAllInstructorsCount, getAllStudentsByCourseId, getCourseScheduleById, getInstructorById, updateInstructorById } from './controllers/instructorController.js';
import { enroll } from './controllers/enrollmentController.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "Yoga Center API is running..." });
});

app.get("/courses",getCourses);
app.get("/courses/:id",getCourseById);
app.post("/contactus",postContactUs);
app.get("/contactus",getContactUs);

app.post("/register",registerUser);
app.post("/login",loginUser);







app.get("/users",getAllUsers);
app.get("/users/:id",getUserById);
app.post("/users",addUser);
app.put("/users/:id",updateUserById);
app.delete("/users/:id",deleteUserById);
app.get("/users/courses/:id",getUserCoursesById);
app.get("/users/schedules/:id", getUserSchedules);



app.get("/courses",getCourses);
app.get("/courses/:id",getCourseById);
app.post("/courses",addCourse);
app.put("/courses/:id",updateCourse);
app.delete("/courses/:id",deleteCourseById);
app.get("/courses/schedule/:id",getCourseScheduledById);



app.get("/instructor/courses/:id",getAllCourseOfInstructorById);
app.get("/instructor/courses/schedule/:id",getCourseScheduleById);
app.get("/instructor/course/student/:id",getAllStudentsByCourseId);
app.get("/instructor/:id",getInstructorById);
app.put("/instructor",updateInstructorById);
app.get("/instructor",getAllInstructor);




app.post("/enroll",enroll);
app.get("/totaluserscount",getAllUsersCount)
app.get("/totalinstructorscount",getAllInstructorsCount)
app.get("/totalcoursescount",getAllCoursesCount)



app.listen(5000,()=>{
    connectDB();
});