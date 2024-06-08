const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hola Mundo, día de la hamburguesa!");
});

app.get("/productos", (req, res) => {
  let productos = [
    { nombre: "Hamburguesa", precio: 80 },
    { nombre: "Papas", precio: 50 },
    { nombre: "Refresco", precio: 30 },
  ];
  let respuesta = '<table border="1">';
  productos.forEach((producto) => {
    respuesta += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`;
  });
  respuesta += "</table>";

  res.send("Lista de productos: " + respuesta);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
