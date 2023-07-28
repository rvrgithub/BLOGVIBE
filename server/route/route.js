const express = require("express");
const {
  register,
  getAll,
  profile,
  updateProfile,
  createBlog,
  loginBoth,
  checkBoth,
  updateBlog,
  getAllBlog,
  singleBlog,
  deleteBlog,
  approvalBlogs,
} = require("../Controller/userController");
const { auth, authAdmin } = require("../middleware/middleware");
const {
  adminRegister,
  updateBlogByA,
  approve,
  approvAll,
  deleteBlogByA,
  deleteUserByA,
} = require("../Controller/adminController");
const route = express.Router();
route.post("/register", register);

// route.post("/login", login);
route.get("/getAll/user", authAdmin, getAll);
route.get("/profile", auth, profile);
route.put("/updateProfile", auth, updateProfile);
route.post("/create/blog", auth, createBlog);
route.delete("/delete/blog/:id", auth, deleteBlog);
//..............................  Admin Section ......................

route.post("/admin/register", authAdmin, adminRegister);
route.put("/admin/approve/:id", authAdmin, approve);
route.put("/approvAll", authAdmin, approvAll);
route.delete("/admin/delete/blog/:id",authAdmin, deleteBlogByA);  
route.put("/update/blogBy/admin/:id",authAdmin, updateBlogByA);
route.delete("/admin/delete/user/:id", authAdmin, deleteUserByA);
// .............................. find both [admin and user] in login.............................

route.post("/Check/login", checkBoth);
route.post("/findBothLogin", loginBoth);

//  ............................ Blog Section......................

route.put("/updateBlog/:id", auth, updateBlog);
route.get("/getAllBlog", auth, getAllBlog);
route.get("/single/blog/:id", auth, singleBlog);
route.get("/" , approvalBlogs) 
module.exports = { route };

