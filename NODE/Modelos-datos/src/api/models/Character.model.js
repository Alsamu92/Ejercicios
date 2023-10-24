const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name:{type:String,
        required:false,
        unique:false},
    
        gender:{
        type:String,
        enum:["hombre","mujer"],
        required:false
    },
    image:{
        type:String,
        required:false,
    }
  },

  {
    timestamps: true,
  }
);

const Character=mongoose.model("Character",characterSchema)

module.exports=Character
