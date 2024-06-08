const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const { connection } = require("../config.db");

const getProducts = (req, res) => {
  connection.query("SELECT * FROM tb_productos", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

app.route("/productos").get(getProducts);

module.exports = app;
