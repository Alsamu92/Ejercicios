
const User = require('../api/models/User.model');
const { verifyToken } = require('../utils/token');

const dotenv = require('dotenv');
dotenv.config();

//!-------------------------------------------------------------------------------------
//?  la primera funcion para saber de forma geneeral si estas auteenticado ------------
//!---------------------------------------------------------------------------------------

const isAuth = async (req, res, next) => {


  const token = req.headers.authorization?.replace('Bearer ', '');


  //** si no tengo token genero un error y se lo mando al user */
  if (!token) {
    return next(new Error('Unauthorized'));
  }

  try {


    const decoded = verifyToken(token, process.env.JWT_SECRET);
    console.log(decoded)

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,

};
