const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber:{type:Number,require:true},
  role:{type:String , default:"user"}
});


exports.User =mongoose.model("User" , userSchema);