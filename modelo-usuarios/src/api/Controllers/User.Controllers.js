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

module.exports={subirUser}