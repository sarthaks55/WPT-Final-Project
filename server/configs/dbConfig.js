import { createConnection } from "mysql2/promise";

let conn=null;

export async function connectDB() {
  try {
    conn = await createConnection({
      host: "localhost",
      user: "root",
      password: "cdac",
      port: 3306,
      database: "yogadb",
    });
    console.log("DB connection created");
  } catch (error) {
    console.log("Error in db coneection");
    console.log(error);
  }
  return conn;
}

export function getConnectionObject() {
  return conn;
}
