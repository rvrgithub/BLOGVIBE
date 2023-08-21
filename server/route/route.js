const express = require("express");
// const {upload}=resquire("../index")
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
  singleUesr,
  getBlogBySingleUser,
  getSelfBlog,
} = require("../Controller/userController");
const { auth, authAdmin } = require("../middleware/middleware");
const {
  adminRegister,
  updateBlogByA,
  approve,
  approvAll,
  deleteBlogByA,
  deleteUserByA,
  adminProfile,
  pendingBlog,
} = require("../Controller/adminController");
const route = express.Router();
// const app=express()

// ..............................

// const path = require("path");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// router.use("/uploads", express.static("uploads"));
// let upload = multer({ storage });

// ...............................
route.post("/register", register);
// route.post("/upload",upload.single("image"),  (req, res) => {
//     res.send("sucess");
//     console.log("upload file ...", req.file);
//   });

// route.post("/login", login);
route.get(
  "/getAll/user",
  // authAdmin,
  getAll
);
route.get("/profile", auth, profile);
route.put("/updateProfile", auth, updateProfile);
route.post("/create/blog", auth, createBlog);
route.delete("/delete/blog/:id", auth,deleteBlog);
//..............................  Admin Section ......................
route.get("/admin/profile", authAdmin, adminProfile);

route.post("/admin/register", authAdmin, adminRegister);
route.put("/admin/approve/:id", authAdmin, approve);
route.put("/approvAll", authAdmin, approvAll);
route.delete("/admin/delete/blog/:id", authAdmin, deleteBlogByA);
// route.put("/update/blogBy/admin/:id",authAdmin, updateBlogByA);
route.delete("/admin/delete/user/:id", authAdmin, deleteUserByA);
// .............................. find both [admin and user] in login.............................

// route.post("/Check/login", checkBoth);
route.post("/findBothLogin", loginBoth);

//  ............................ Blog Section......................

// route.put("/updateBlog/:id", auth, updateBlog);
route.get("/getAllBlog", auth, getAllBlog);
route.get("/single/blog/:id", auth, singleBlog);
route.get("/", approvalBlogs);
route.get("/admin/pending/blog", pendingBlog);
route.get("/single/uesr/:id", singleUesr);
route.get("/sinlgeUser/blog/:id", getBlogBySingleUser);
route.get("/getself/blog", auth, getSelfBlog);
route.get("/admin/getself/blog", authAdmin);
module.exports = { route };
