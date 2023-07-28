const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  descriptions: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status:{type:String ,default:"pending"}
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = { Blog };
