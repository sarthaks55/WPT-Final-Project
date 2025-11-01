import { getConnectionObject } from "../configs/dbConfig.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const conn = getConnectionObject();
    const [existing] = await conn.query(`SELECT * FROM users WHERE email ='${data.email}'`);
    if (existing.length) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const [resultSet] = await conn.query(`INSERT INTO users (role_id, full_name, email, password_hash, phone) VALUES (3,'${data.full_name}', '${data.email}','${data.password}','${data.phone}')`);
      console.log(resultSet);
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



export async function loginUser(req,res){
    try {
        const conn = getConnectionObject();
        const {email,password} = req.body;
        const qry = `SELECT * FROM users WHERE email ='${email}'`;
        const [rows] = await conn.query(qry);
        if(rows.length === 0 ) {
            res.status(400).send("Failed");
        }
        else {
                res.status(200).send({message:'Login sucessful'});
            }
             
        } catch (error) {
        

        res.status(500).send({message:"Error "});
    }
};
