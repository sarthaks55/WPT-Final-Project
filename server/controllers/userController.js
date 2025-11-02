import express from 'express';
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

        const qry = `
            INSERT INTO users (role_id, full_name, email, password_hash, phone)
            VALUES (${role_id}, '${full_name}', '${email}', '${password_hash}', '${phone}')
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
    const qry = `UPDATE users SET 
        role_id='${role_id}', 
        full_name='${full_name}', 
        email='${email}', 
        password_hash='${password_hash}', 
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


