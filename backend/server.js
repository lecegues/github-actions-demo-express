const dotenv = require("dotenv"); // load environment variables from .env file

const express = require("express");
const { Sequelize, Model, DataTypes } = require("sequelize");

// Initiate modules
const app = express();

// Middleware
app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: true })); // parse

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.POSTGRES_DB, // DB name
  process.env.POSTGRES_USER, // user name
  process.env.POSTGRES_PASSWORD, // password
  {
    host: process.env.POSTGRES_HOST, // host port
    dialect: "postgres",
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080);
