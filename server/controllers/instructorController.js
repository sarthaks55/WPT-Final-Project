import { getConnectionObject } from "../configs/dbConfig.js";




export async function getAllCourseOfInstructorById(request, response) {
  try {
    const connection = getConnectionObject();
    const qry = `SELECT 
                    c.id AS course_id,
                    c.name AS course_name,
                    c.description,
                    c.difficulty,
                    c.duration_weeks,
                    c.price
                FROM courses c
                JOIN course_schedules cs ON c.id = cs.course_id
                JOIN instructors i ON cs.instructor_id = i.id
                WHERE i.id = ${request.params.id}
                GROUP BY c.id;
            `;
    const [rows] = await connection.query(qry);
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}



export async function getCourseScheduleById(request, response) {
  try {
    const connection = getConnectionObject();
    const qry = `SELECT 
                    c.name AS course_name,
                    cs.start_datetime,
                    cs.end_datetime,
                    cs.location
                FROM courses c
                JOIN course_schedules cs ON c.id = cs.course_id
                WHERE cs.instructor_id = <INSTRUCTOR_ID>
                ORDER BY cs.start_datetime;
            `;
    const [rows] = await connection.query(qry);
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}



