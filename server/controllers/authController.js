import { compareSync, hashSync } from "bcrypt";
import { getConnectionObject } from "../configs/dbConfig.js";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
  try {
    const {full_name, email, password_hash, phone} = req.body;
    const encryptedPassword = hashSync(password_hash, 12);
    const conn = getConnectionObject();
    const [existing] = await conn.query(
      `SELECT * FROM users WHERE email ='${email}'`
    );
    if (existing.length) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const [resultSet] = await conn.query(
        `INSERT INTO users (role_id, full_name, email, password_hash, phone) VALUES (3,'${full_name}', '${email}','${encryptedPassword}','${phone}')`
      );
      console.log(resultSet);
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export async function loginUser(req, res) {
  try {
    const conn = getConnectionObject();
    const { email, password_hash } = req.body;

    // ⚠️ Use parameterized query to prevent SQL injection
    const qry = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await conn.query(qry, [email]);

    if (rows.length === 0) {
      return res.status(400).send({ message: "User not found" });
    }

    const user = rows[0];

    // Compare password
    if (compareSync(password_hash, user.password_hash)) {
      // Create JWT token
      const token = jwt.sign({ adminId: user.id }, "admin1234");

      // ✅ Send role_id as part of response
      res.status(200).send({
        token,
        message: "Login successful",
        role_id: user.role_id,
        username: user.full_name,
        user_id: user.id   // <-- Added this line
      });
    } else {
      res.status(400).send({ message: "Login failed, password is invalid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error" });
  }
}
