const { Pool } = require("pg");
require("dotenv").config();

/* const pool = new Pool({
  user: "postgres",
  password: "284612345",
  host: "localhost",
  port: 5432,
  database: "perntodo",
}); */

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: 5432,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

module.exports = pool;
