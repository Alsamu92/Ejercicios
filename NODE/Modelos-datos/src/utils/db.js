const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

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
    console.log("hay un error", error);
  }
};

module.exports = { connect };
