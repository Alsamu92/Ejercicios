const { crearSupermercado, toggleArticulo } = require("../controllers/Supermercado.controllers");

const SuperRoutes=require("express").Router()

SuperRoutes.post("/",crearSupermercado)
SuperRoutes.patch("/add/:id",toggleArticulo)

module.exports=SuperRoutes