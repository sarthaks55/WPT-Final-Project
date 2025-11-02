import { getConnectionObject } from "../configs/dbConfig.js";


export async function getCourses(req,res){
    try {
        const conn = getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM courses");
        console.log(rows);
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).send({message:"Error "});
    }
}




export async function getCourseById (req,res){
    try {
        const conn = getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM courses WHERE id ="+req.params.id);
        console.log(rows);
        res.status(200).send(rows);
    } catch (error) {
        res.status(404).json({ message: "Course not found" });
    }
}