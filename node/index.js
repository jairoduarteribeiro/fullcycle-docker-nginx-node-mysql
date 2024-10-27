const express = require("express");
const mysql = require("mysql2");
const { faker, th } = require("@faker-js/faker");

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "secret",
  database: "fullcycle",
});

connection.connect();

const app = express();
const port = 3000;

function insertName(name) {
  const sql = `INSERT INTO people (name) VALUES ('${name}')`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
    }
  });
}

app.get("/", (req, res) => {
  const name = faker.person.fullName();
  try {
    insertName(name);
    res.send("Full Cycle Rocks!");
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while inserting the name into the database.");
  }
});

["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) =>
  process.on(signal, () => {
    connection.end();
    console.log(`Connection closed`);
    process.exit();
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
