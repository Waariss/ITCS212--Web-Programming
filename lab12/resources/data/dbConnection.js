const dotenv = require('dotenv')
const mysql = require('mysql2/promise')
dotenv.config()
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "2710",
  database: "reminder",
}
// Create a connection to DB
module.exports = async () => {
    try {
        let connection = await mysql.createConnection(dbConfig)
    return connection
  } catch (error) {
    throw error
  }
}