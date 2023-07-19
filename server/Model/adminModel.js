const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber:{type:Number,require:true},
  role:{type:String , default:"admin"}
});


exports.Admin =mongoose.model("Admin" , adminSchema);
