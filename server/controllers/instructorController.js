import { getConnectionObject } from "../configs/dbConfig.js";




export async function getAllInstructor (req, res){
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM instructors");
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

export async function getInstructorById(req, res) {
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM instructors WHERE id = ?", [req.params.id]);
        if (rows.length === 0) {
            res.status(404).send({ message: "Instructor not found" });
        } else {
            res.status(200).send(rows[0]);
        }
    } catch (error) {
        res.status(500).send({ message: "Error fetching user", error });
    }
};



export async function updateInstructorById (req, res){
    try {
    const conn = getConnectionObject();
    
    const { bio, specialty, experience_years, certifications, rating, available_days, session_duration, languages   } = req.body;
    const qry = `UPDATE instructors SET 
        bio='${bio}', 
        specialty='${specialty}', 
        experience_years = '${experience_years}',
    certifications = '${certifications}',
    rating = ${rating},
    available_days = '${available_days}',
    session_duration = ${session_duration},
    languages = '${languages}'

      WHERE user_id=${req.params.id}
    `;
    const [result] = await conn.query(qry);

    if (result.affectedRows === 1) {
      res.status(200).send({ message: "Instructor updated successfully" });
    } else {
      res.status(404).send({ message: "Instructor not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};


export async function deleteInstructorById(req, res){
    try {
        const conn=getConnectionObject();
        const [result] = await conn.query("DELETE FROM instructors WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: "Instructor not found" });
        } else {
            res.status(200).send({ message: "Instructor deleted successfully" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error deleting Instructor", error });
    }
};



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
                WHERE i.user_id = ${request.params.id}
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


export async function addInstructor(req, res) {
  try {
    const connection = getConnectionObject();
    const { user_id, bio, specialty, experience_years, certifications, available_days } = req.body;

    const qry = `
      INSERT INTO instructors (user_id, bio, specialty, experience_years, certifications, available_days)
      VALUES (${user_id}, '${bio}', '${specialty}', ${experience_years}, '${certifications}', '${available_days}')
    `;

    const [resultSet] = await connection.query(qry);

    if (resultSet.affectedRows === 1) {
      res.status(201).send({ message: "Instructor Added Successfully" });
    } else {
      res.status(500).send({ message: "Unable to Add Instructor" });
    }
  } catch (error) {
    console.error("Error adding instructor:", error);
    res.status(500).send({ message: "Something went wrong" });
  }
}

export async function updateInstructor(req, res) {
  try {
    const conn = getConnectionObject();
    const { bio, specialty, experience_years, certifications, rating, available_days, session_duration, languages } = req.body;

    const qry = `
      UPDATE instructors SET 
        bio='${bio}', 
        specialty='${specialty}', 
        experience_years=${experience_years},
        certifications='${certifications}',
        rating=${rating || 0},
        available_days='${available_days}',
        session_duration=${session_duration || 0},
        languages='${languages || ""}'
      WHERE id=${req.params.id}
    `;

    const [result] = await conn.query(qry);

    if (result.affectedRows === 1) {
      res.status(200).send({ message: "Instructor updated successfully" });
    } else {
      res.status(404).send({ message: "Instructor not found" });
    }
  } catch (error) {
    console.error("Error updating instructor:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAllInstructorsCount (req, res){
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT COUNT(id) AS InstructorsCount FROM instructors;");
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};