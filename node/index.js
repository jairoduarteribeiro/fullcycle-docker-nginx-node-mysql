const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const name = faker.person.fullName();
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
