// Commect mysql server and database
const mysql = require("mysql");
const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "",
    multipleStatements: true,
    database: "payment_db",
});
connection.connect((err) => {
if (!err) {
     console.log("MySQL Connected");
}
else{
   console.log("DB Error", err);
}
});
module.exports = connection;
