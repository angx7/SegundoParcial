const express = require("express");
var cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/productos'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
