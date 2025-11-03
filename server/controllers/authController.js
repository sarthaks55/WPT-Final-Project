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
    const qry = `SELECT * FROM users WHERE email ='${email}'`;
    const [rows] = await conn.query(qry);
    if (rows.length === 0) {
      res.status(400).send("Failed");
    } else {
      if (compareSync(password_hash, rows[0].password_hash)) {
        const token = jwt.sign({ adminId: rows[0].id }, "admin1234");
        res.status(200).send({ token, message: "Login successful" });
      } else {
        res
          .status(400)
          .send({ message: "Login failed, password is invalid" });
      }
      // compare the password
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error " });
  }
}
