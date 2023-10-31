//todo-----------CONTROLADOR PARA SUBIR NUEVO USUARIO-------------------

const {
  deleteImgCloudinary,
} = require("../../../../NODE/Modelos-datos/src/middleware/files.middleware");
const { getSendEmail, setSendEmail } = require("../../state/state.data");
const randomCode = require("../../utils/randomCode");
const sendEmail = require("../../utils/sendEmail");
const { generateToken } = require("../../utils/token");
const User = require("../models/User.model");
const nodemailer = require("nodemailer");

const subirUser = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes();
    let confirmationCode = randomCode();
    const { name, email } = req.body;
    const userExiste = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExiste) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (catchImg) {
        newUser.image = catchImg;
      } else {
        newUser.image =
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
      }
      try {
        const usuarioGuardado = await newUser.save();
        if (usuarioGuardado) {
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });
          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return res.status(404).json({
                user: usuarioGuardado,
                confirmationCode: "error",
              });
            } else {
              console.log(`email mandado` + info.response);
              return res.status(200).json({
                user: usuarioGuardado,
                confirmationCode,
              });
            }
          });
        }
      } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res.status(404).json({
          error: "error al guardar",
          message: error.message,
        });
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(404).json("El ususario ya existe");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg);
    next(error);
    return (
      res.status(404).json({
        mensaje: "Error al crear",
        error: error,
      }) && next(error)
    );
  }
};
//todo---------------------------------------------------------------------
//todo-----------CONTROLADOR PARA BORRAR USUARIO-------------------

const borrarUser = async (req, res, nex) => {
  const { id } = req.params;
  try {
    const usuarioBorrado = await User.findByIdAndDelete(id);

    if (usuarioBorrado) {
      oldImage = usuarioBorrado.image;
      const buscarUsuarioBorrado = await User.findById(usuarioBorrado);
      if (buscarUsuarioBorrado) {
        return res.status(404).json("El usuario no ha podido ser borrado");
      } else {
        deleteImgCloudinary(oldImage);
        return res.status(200).json("el articulo ha sido borrado");
      }
    } else {
      return res.status(404).json("El artículo no está");
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error al borrar",
      error: error.message,
    });
  }
};
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
          if (req.body[item] === UserByIdUpdate[item]) {
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
//todo---------------------------------------------------------------------
//todo-----------REGISTER ESTADO-------------------

const registerEstado = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes();

    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();

        if (userSave) {
          sendEmail(email, name, confirmationCode);

          setTimeout(() => {
            if (getSendEmail()) {
              setSendEmail(false);
              res.status(200).json({
                user: userSave,
                confirmationCode,
              });
             
            } else {
              setSendEmail(false);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
          }, 1400);
        }
      } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res.status(404).json({
          error: "error catch save",
          message: error.message,
        });
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    req.file && deleteImgCloudinary(catchImg);
    return (
      res.status(404).json({
        error: "error catch general",
        message: error.message,
      }) && next(error)
    );
  }
};

//todo---------------------------------------------------------------------
//todo-----------REGISTER CON REDIRECT-------------------
const registerRedirect=async(req,res,next)=>{
let catchImg=req.file?.path
try {
await User.syncIndexes()
let confirmationCode=randomCode()
//establece esta variable para saber si ya esta registrado.
const userExist= await User.findOne(
  {email:req.body.email},
  {name:req.body.name}
)

if(!userExist){
  const newUser= new User({...req.body,confirmationCode})
if(req.file){
  newUser.image=req.file.path
}else{
  newUser.image="https://pic.onlinewebfonts.com/svg/img_181369.png"
}

try {
const usuarioGuardado=await newUser.save()
if(usuarioGuardado){
return res.redirect(
  307,
  `http://localhost:8080/api/v1/users/register/sendMail/${usuarioGuardado._id}`
)
}
  
} catch (error) {
  req.file&&deleteImgCloudinary(catchImg)
  return res.status(404).json({
    error:"error al guardar",
    message:error.message
  })
}




}else{
  req.file&&deleteImgCloudinary(catchImg)
  return res.status(409).json("Este usuario ya está registrado")
}



  req.file&&deleteImgCloudinary(catchImg)
} catch (error) {
  return (res.status(404).json({
   error:"error catch general",
   message:error.message
  })&&next(error)
  )
}
}

//todo -----------------------------------------------------------------------------
//todo ----------------------------SEND CODE CONFIRMATION--------------------------
//todo -----------------------------------------------------------------------------
//!Esta función será llamada al mandarse la petición por la ruta.

const sendCode=async(req,res,next)=>{
  try {
    const{id}=req.params
    const userDB=await User.findById(id)
    const emailEnv = process.env.EMAIL;
    const password = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailEnv,
        pass: password,
      },
    });

    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: 'Confirmation code',
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(404).json({
          user: userDB,
          confirmationCode: 'error, resend code',
        });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({
          user: userDB,
          confirmationCode: userDB.confirmationCode,
        });
      }
    });
  } catch (error) {
    return res.status(404).json({
      error:"Error en el catch general",
      message:error.message
    })&&next(error)
  }
}






//todo---------------------------------------------------------------------
//todo-----------LOGIN-------------------

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userDb = await User.findOne({ email });
          
    if (userDb) {
        //Si existe y conincide la pass generar el token
      if (bcrypt.compareSync(password, userDb.password)) {
        const token = generateToken(userDb._id, email);
        

        return res.status(200).json({
          user: userDb,
          token,
        });
      } else {
        return res.status(404).json("La contraseña no coincide");
      }
    } else {
      return res.status(404).json("usuario no registrado");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { subirUser, borrarUser, update, registerEstado,login,registerRedirect,sendCode };
