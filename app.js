const express = require("express");
const app = express();

//requiero la db
const db = require("./db/db");
//requiero el index de rutas.
const routes = require("./routes");

app.use("/", routes);

//ERROR MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(404).send(err);
});

//conectándose a la base de datos
db.sync()
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(3000);
    console.log("Servidor escuchando en el puerto 3000");
  })
  .catch(console.error);
