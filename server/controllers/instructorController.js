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
                WHERE cs.instructor_id = ${request.params.id}
                ORDER BY cs.start_datetime;
            `;
    const [rows] = await connection.query(qry);
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}



export async function getAllStudentsByCourseId(request, response) {
  try {
    const connection = getConnectionObject();
    const qry = `SELECT 
                    u.id AS student_id,
                    u.full_name,
                    u.email,
                    u.phone,
                    e.enrollment_date,
                    e.status
                FROM enrollments e
                JOIN users u ON e.user_id = u.id
                WHERE e.course_id = ${request.params.id}
                AND u.role_id = 3; 
            `;
    const [rows] = await connection.query(qry);
    response.status(200).send(rows);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong" });
  }
}



