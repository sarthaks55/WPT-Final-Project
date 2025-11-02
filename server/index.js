import express from 'express';
import { connectDB } from './configs/dbConfig.js';
import userRoutes from './controllers/userController.js'

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Yoga Center API is running..." });
});

app.use("/users", userRoutes);




app.listen(4500,()=>{
    connectDB();
});