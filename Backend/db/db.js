const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // port: 3307,
  database: "todo_db"

  // host: "localhost",
  // user: "asiptrej_nvoiceproduction",
  // password: "0771924823*@",
  // database: "asiptrej_invoiceproduction",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

module.exports = connection;
