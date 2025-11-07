import express from 'express';
import { compareSync, hashSync } from "bcrypt";
import { getConnectionObject} from '../configs/dbConfig.js';

//GET all users
export async function getAllUsers (req, res){
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM users");
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

//GET user by ID
export async function getUserById(req, res) {
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM users WHERE id = ?", [req.params.id]);
        if (rows.length === 0) {
            res.status(404).send({ message: "User not found" });
        } else {
            res.status(200).send(rows[0]);
        }
    } catch (error) {
        res.status(500).send({ message: "Error fetching user", error });
    }
};

//CREATE a new user
export async function addUser(request, response) {
    try {
        const connection = getConnectionObject();
        const { role_id, full_name, email, password_hash, phone } = request.body;
        const encryptedPassword = hashSync(password_hash, 12);
        const qry = `INSERT INTO users (role_id, full_name, email, password_hash, phone)
            VALUES (${role_id}, '${full_name}', '${email}', '${encryptedPassword}', '${phone}')
        `;

        const [resultSet] = await connection.query(qry);

        if (resultSet.affectedRows === 1) {
            response.status(201).send({ message: 'User Added Successfully' });
        } else {
            response.status(500).send({ message: 'Unable to Add User' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}


//UPDATE a user
export async function updateUserById (req, res){
    try {
    const conn = getConnectionObject();
    
    const { role_id, full_name, email, password_hash, phone } = req.body;
    const encryptedPassword = hashSync(password_hash, 12);
    const qry = `UPDATE users SET 
        role_id='${role_id}', 
        full_name='${full_name}', 
        email='${email}', 
        password_hash='${encryptedPassword}', 
        phone='${phone}' 
      WHERE id=${req.params.id}
    `;
    const [result] = await conn.query(qry);

    if (result.affectedRows === 1) {
      res.status(200).send({ message: "User updated successfully" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

//DELETE a user
export async function deleteUserById(req, res){
    try {
        const conn=getConnectionObject();
        const [result] = await conn.query("DELETE FROM users WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: "User not found" });
        } else {
            res.status(200).send({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error deleting user", error });
    }
};


export async function getUserCoursesById(req, res) {
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT c.id AS course_id,c.name AS course_name,c.description,c.difficulty,c.duration_weeks,c.price,e.enrollment_date,e.status FROM enrollments e JOIN courses c ON e.course_id = c.id WHERE e.user_id = ?", [req.params.id]);
        if (rows.length === 0) {
            res.status(404).send({ message: "Courses not found" });
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        res.status(500).send({ message: "Error fetching user", error });
    }
};


export async function getUserSchedules(req, res) {
  try {
    const conn = getConnectionObject();
    const userId = req.params.id; 

    const qry = `
      SELECT
        cs.id AS schedule_id,
        cs.course_id,
        c.name AS course_name,
        cs.instructor_id,
        instr.full_name AS instructor_name,
        cs.start_datetime,
        cs.end_datetime,
        cs.location
      FROM course_schedules AS cs
      JOIN enrollments AS e
        ON e.course_id = cs.course_id
      JOIN courses AS c
        ON c.id = cs.course_id
      LEFT JOIN users AS instr
        ON instr.id = cs.instructor_id
      WHERE e.user_id = ?
        AND e.status = 'Active'
      ORDER BY cs.start_datetime;
    `;

    const [rows] = await conn.query(qry, [userId]);

    if (rows.length > 0) {
      res.status(200).send(
        
        rows
      );
    } else {
      res.status(404).send({
        message: "No schedules found for this user",
      });
    }
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(500).send({
      message: "Something went wrong",
      error: error.message,
    });
  }
}


export async function getAllUsersCount (req, res){
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT COUNT(id) AS UsersCount FROM users;");
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};