const { upload } = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware")
const { subirUser, borrarUser, update } = require("../Controllers/User.Controllers")

const UserRoutes=require("express").Router()



UserRoutes.post("/",upload.single("image"),subirUser)
UserRoutes.delete("/:id",borrarUser)
UserRoutes.patch("/",update)
module.exports=UserRoutes

