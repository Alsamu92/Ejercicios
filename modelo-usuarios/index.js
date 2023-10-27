const express=require("express")
const dotenv=require("dotenv")
const { conectarBd } = require("./src/utils/db")
dotenv.config()

conectarBd()
const app=express()
const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`Servidor lanzado en el puerto 👌 http://localhost:${PORT}`)
})