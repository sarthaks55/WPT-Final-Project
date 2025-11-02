import express from 'express';
import { getConnectionObject} from '../configs/dbConfig.js';

const router = express.Router();

//GET all users
router.get("/", async (req, res) => {
    try {
        const conn=getConnectionObject();
        const [rows] = await conn.query("SELECT * FROM users");
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

//GET user by ID
router.get("/:id", async (req, res) => {
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
});

//CREATE a new user
router.post("/adduser", async (req, res) => {
    try {
        const conn=getConnectionObject();
        const { role_id, full_name, email, password_hash, phone } = req.body;
        const [result] = await conn.query(
            "INSERT INTO users (role_id, full_name, email, password_hash, phone) VALUES (?, ?, ?, ?, ?)",
            [role_id, full_name, email, password_hash, phone]
        );
        res.status(201).send({ message: "User created successfully", userId: result.insertId });
    } catch (error) {
        res.status(500).send({ message: "Error creating user", error });
        console.log(error);
    }
});

//UPDATE a user
router.put("/:id", async (req, res) => {
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
});

//DELETE a user
router.delete("/:id", async (req, res) => {
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
});

export default router;
