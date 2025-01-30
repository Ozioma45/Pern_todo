const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//ROUTES

//create a todo

//get all todo

//get a todo

//update a todo

//delete a todo

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
