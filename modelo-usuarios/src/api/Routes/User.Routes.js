const { upload } = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware")
const { subirUser } = require("../Controllers/User.Controllers")

const UserRoutes=require("express").Router()



UserRoutes.post("/",upload.single("image"),subirUser)

module.exports=UserRoutes

