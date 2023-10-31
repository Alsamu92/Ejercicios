const { upload } = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware")
const { subirUser, borrarUser, update, registerEstado, login, sendCode, registerRedirect, checkUser, sendPassword, cambiarContrasena } = require("../Controllers/User.Controllers")

const UserRoutes=require("express").Router()



UserRoutes.post("/",upload.single("image"),subirUser)
UserRoutes.post("/register/estado/",upload.single("image"),registerEstado)
UserRoutes.delete("/:id",borrarUser)
UserRoutes.patch("/",update)
UserRoutes.post("/login", login)
UserRoutes.post("/login", login)
UserRoutes.post("/",upload.single("image"),registerRedirect)
UserRoutes.post("/check",checkUser)
UserRoutes.patch("/cambiarpass/cambiarpass/",cambiarContrasena)


//rutas con redirect
UserRoutes.post("/register/sendMail/:id",sendCode)
UserRoutes.patch("/sendPassword/:id",sendPassword)
module.exports=UserRoutes

