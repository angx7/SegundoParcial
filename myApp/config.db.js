const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

let connection;

try {
  connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });


} catch (error) {
  console.log(error);
}

module.exports = { connection };
