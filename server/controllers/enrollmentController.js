import { getConnectionObject } from "../configs/dbConfig.js";


export async function enroll(request, response){
    try {
        const connection = getConnectionObject();
        const {user_id ,course_id } = request.body;
        const qry = `INSERT INTO enrollments(user_id, course_id) VALUES(${user_id},${course_id})`;
        const [resultSet] = await connection.query(qry);
        if(resultSet.affectedRows === 1){
            response.status(200).send({message:'Enrollment Added'});
        }
        else{
            response.status(500).send({message:'Cannot add Enroolment at this time'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({message:'Something went wrong'});
    }
}