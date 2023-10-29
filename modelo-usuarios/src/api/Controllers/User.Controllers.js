//todo-----------CONTROLADOR PARA SUBIR NUEVO USUARIO-------------------

const { deleteImgCloudinary } = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware")
const randomCode = require("../../utils/randomCode")
const User = require("../models/User.model")
const nodemailer=require("nodemailer")

const subirUser=async(req,res,next)=>{
    let catchImg=req.file?.path

try {
    await User.syncIndexes()
let confirmationCode=randomCode()
const{name,email}=req.body
const userExiste=await User.findOne(
    {email:req.body.email},
    {name:req.body.name}
)
if(!userExiste){
    const newUser=new User({...req.body,confirmationCode})
    if(catchImg){
        newUser.image=catchImg
    }else{
        newUser.image="https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png"
    }
    try{
        const usuarioGuardado=await newUser.save()
        if(usuarioGuardado){
            const emailEnv=process.env.EMAIL
            const password=process.env.PASSWORD
            const transporter=nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: emailEnv,
                  pass: password,
                },
            })
            const mailOptions={
                from: emailEnv,
                to: email,
                subject: 'Confirmation code',
                text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
            }
            transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error)
                    return res.status(404).json({
                        user:usuarioGuardado,
                        confirmationCode:"error"
                    })
                }else{
                    console.log(`email mandado` + info.response)
                    return res.status(200).json({
                        user:usuarioGuardado,
                        confirmationCode
                    })
                }
            })
        }
    }catch(error){
        req.file&&deleteImgCloudinary(catchImg)
        return res.status(404).json({
            error:"error al guardar",
            message:error.message
        })
    }
}else{
    if(req.file)deleteImgCloudinary(catchImg)
    return res.status(404).json("El ususario ya existe")
}
   

   

} catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg)
    next(error)
    return res.status(404).json({
      mensaje:"Error al crear",
      error:error,
    
    })&& next(error)
    
}
}
//todo---------------------------------------------------------------------
//todo-----------CONTROLADOR PARA BORRAR USUARIO-------------------

const borrarUser=async(req,res,nex)=>{
    const {id}=req.params
    try {
        const usuarioBorrado=await User.findByIdAndDelete(id)

        if (usuarioBorrado){
    const buscarUsuarioBorrado= await User.findById(usuarioBorrado)        
return res.status(buscarUsuarioBorrado?404:200).json(buscarUsuarioBorrado?"No se ha borrado":"Se ha borrado")

        }
       
        else{
            return res.status(404).json("El artículo no está")
        }
        
    } catch (error) {
        return res.status(404).json({
            message:"Error al borrar",
            error:error.message
        })
    }
 
}
//todo---------------------------------------------------------------------
//todo-----------CONTROLADOR PARA ACTUALIZAR USUARIO-------------------

const update = async (req, res, next) => {
    await User.syncIndexes();
    let catchImg = req.file?.path;
    try {
      const { id } = req.params;
      const UserById = await User.findById(id);
      if (UserById) {
        const oldImg = UserById.image;
  
        const customBody = {
          _id: UserById._id,
          image: req.file?.path ? catchImg : oldImg,
          name: req.body?.name ? req.body?.name : ArticuloById.name,
        
        };
  
        try {
          await User.findByIdAndUpdate(id, customBody);
          if (req.file?.path) {
            deleteImgCloudinary(oldImg);
          }
          const UserByIdUpdate = await User.findById(id);
  
          const elementUpdate = Object.keys(req.body);
  
          let test = {};
  
          elementUpdate.forEach((item) => {
            if (req.body[item] ===UserByIdUpdate[item]) {
              test[item] = true;
            } else {
              test[item] = false;
            }
          });
  
          if (catchImg) {
           UserByIdUpdate.image === catchImg
              ? (test = { ...test, file: true })
              : (test = { ...test, file: false });
          }
          let acc = 0;
          for (clave in test) {
            test[clave] == false && acc++;
          }
  
          if (acc > 0) {
            return res.status(404).json({
              dataTest: test,
              update: false,
            });
          } else {
            return res.status(200).json({
              dataTest: test,
              update: true,
            });
          }
        } catch (error) {}
      } else {
        return res.status(404).json("este Usuario no existe");
      }
    } catch (error) {
      return res.status(404).json(error);
    }
  };

module.exports={subirUser,borrarUser,update}
