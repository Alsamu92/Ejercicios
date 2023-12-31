

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();


const { connect } = require("./src/utils/db");

connect();


const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();


const PORT = process.env.PORT;


const app = express();


app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));


const ArticuloRoutes = require("./src/api/routes/Articulo.routes");

app.use("/api/v1/articulos/", ArticuloRoutes);
const SuperRoutes = require("./src/api/routes/Supermercado.routes");
app.use("/api/v1/supermercados/",SuperRoutes)


app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});


app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
