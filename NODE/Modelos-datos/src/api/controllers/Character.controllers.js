const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");


const create=async(req,res,next)=>{
    let catchImg=req.file?.path
    try {
        await Character.syncIndexes()
      const newCharacter=new Character(req.body)
      if(req.file){newCharacter.image=catchImg
    }else{
        newCharacter.image="https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/i5fyik74lkgtgkainquc.png"
    }
    const saveCharacter=await newCharacter.save()

    if(saveCharacter){
        return res.status(200).json(saveCharacter)
    }else{
        res.status(404).json("No guardado")
    }
    } catch (error) {
        req.file?.path&&deleteImgCloudinary(catchImg)
        next(error)
        return (
            res.status(404).json({
              messege: "error en el creado del elemento",
              error: error,
            }) && next(error)
          )
    }
}
module.exports={create}