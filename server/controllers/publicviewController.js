import { getConnectionObject } from "../configs/dbConfig.js";


export async function getCourses(req,res){
    try {
        const conn = getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM courses");
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




export async function postContactUs(request, response){
    try {
        const connection = getConnectionObject();
        const {name, email ,phone ,message } = request.body;
        const qry = `INSERT INTO contact_us (name, email ,phone ,message) VALUES('${name}','${email}','${phone}','${message}')`;
        const [resultSet] = await connection.query(qry);
        if(resultSet.affectedRows === 1){
            response.status(200).send({message:'Contact Us Message Added'});
        }
        else{
            response.status(500).send({message:'Cannot add Contact Us Message at this time'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}