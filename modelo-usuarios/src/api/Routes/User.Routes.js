const { upload } = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware")
const { subirUser, borrarUser, update, registerEstado, login, sendCode, registerRedirect } = require("../Controllers/User.Controllers")

const UserRoutes=require("express").Router()



UserRoutes.post("/",upload.single("image"),subirUser)
UserRoutes.post("/register/estado/",upload.single("image"),registerEstado)
UserRoutes.delete("/:id",borrarUser)
UserRoutes.patch("/",update)
UserRoutes.post("/login", login)
UserRoutes.post("/login", login)
UserRoutes.post("/",upload.single("image"),registerRedirect)



UserRoutes.post("/register/sendMail/:id",sendCode)
module.exports=UserRoutes

