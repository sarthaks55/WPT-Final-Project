import { getConnectionObject } from "../configs/dbConfig.js";

export async function addCourse(request, response){
    try {
        const connection = getConnectionObject();
        const {name, description, difficulty, duration_weeks, price} = request.body;
        const qry = `INSERT INTO courses(name, description, difficulty, duration_weeks, price) VALUES('${name}','${description}','${difficulty}',${duration_weeks},${price})`;
        const [resultSet] = await connection.query(qry);
        if(resultSet.affectedRows === 1){
            response.status(200).send({message:'Course Added'});
        }
        else{
            response.status(500).send({message:'Cannot add Course at this time'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}

export async function updateCourse(request, response){
try {
        const connection = getConnectionObject();
        const {name, description, difficulty, duration_weeks, price} = request.body;
        const qry = `UPDATE courses SET name='${name}',description='${description}',difficulty='${difficulty}',duration_weeks=${duration_weeks},price=${price} WHERE id=${request.params.id}`;
        const [resultSet] = await connection.query(qry);
        if(resultSet.affectedRows === 1){
            response.status(200).send({message:'Course Updated'});
        }
        else{
            response.status(500).send({message:'Course update operation failed'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}

export async function getAllCourse(request, response){
    try {
        const connection = getConnectionObject();
        const qry = `SELECT * FROM courses`;
        const [rows] = await connection.query(qry);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}

export async function getCourseById(request, response){
    try {
        const connection = getConnectionObject();
        const qry = `SELECT * FROM courses WHERE id=${request.params.id}`;
        const [rows] = await connection.query(qry);
        if(rows.length === 0){
            response.status(404).send({message:'Course not found'});
        }
        else{
            response.status(200).send(rows[0]);
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}


export async function deleteCourseById(request, response){
    try {
        const connection = getConnectionObject();
        const qry = `DELETE FROM courses WHERE id=${request.params.id}`;
        const [resultSet] = await connection.query(qry);
        if(resultSet.affectedRows === 1){
            response.status(200).send({message:'Course Deleted'});
        }
        else{
            response.status(404).send({message:'Course not found'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}