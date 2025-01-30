const pool = require("pg").Pool;

const pool = new pool({
  user: "postgres",
  password: "284612345",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
