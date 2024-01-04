

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");



const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
  
      useNewUrlParser: true,
     
      useUnifiedTopology: true,
    });

    const { name, host } = db.connection;

    console.log(
      `Conectada la DB 👌 con el HOST:${host} con el nombre: ${name}`
    );
  } catch (error) {
    console.log("tenemos un error en la conexion a la DB ❌", error);
  }
};

module.exports = { connect };
