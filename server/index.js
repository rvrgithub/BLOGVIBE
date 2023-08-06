// const express = require("express");
// require("dotenv").config();
// const app = express();
// app.use(express.json());
// const { route } = require("./route/route");
// const { Connection } = require("./Connection/Connetion");
// const bodyParser=require("body-parser")
// const path = require("path");
// const multer = require("multer");
// const { createBlog } = require("./Controller/userController");
// const { auth } = require("./middleware/middleware");
// app.use(multer().any())
// app.use(bodyParser.urlencoded({ extended: false }))

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// app.use("/uploads", express.static("uploads"));
// let upload = multer({ storage });

// app.use("/", route);
// app.post("/create/blog",upload.single("image"), auth, createBlog)

// // // multer route
// app.post("/upload", upload.single("image"), (req, res) => {
//   res.send("sucess");
//   console.log("upload file ...", req.file);
// });
// app.get("/images/:filename", (req, res) => {
//   const filename = req.params.filename;
//   console.log("filename", filename);
//   res.sendFile(path.join(__dirname, "upload", filename));
// });

// // ......................

// app.listen(process.env.PORT, () => {
//   Connection();
//   console.log(`Listen At Port ${process.env.PORT}`);
// });


const express=require("express")
const app=express()
const path=require("path")
const multer=require('multer')
const { route } = require("./route/route")
const { auth, authAdmin } = require("./middleware/middleware")
const { createBlog, updateBlog } = require("./Controller/userController")
const { Connection } = require("./Connection/Connetion")
const { updateBlogByA } = require("./Controller/adminController")

const storage=multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,"upload")
},
filename:(req,file,cb)=>{

cb(null,Date.now()+path.extname(file.originalname))
}
})
app.use('/uploads', express.static('uploads'));
let upload=multer({storage})


app.post("/upload",upload.single("image"),(req,res)=>{
  console.log(req.file)
res.send("sucess")

})

app.get('/images/:filename', (req, res) => {
const filename = req.params.filename;
res.sendFile(path.join(__dirname, 'upload', filename));
});

app.post("/create/blog",upload.single("image"),auth, createBlog)
;
route.put("/update/blogBy/admin/:id",upload.single("image"),authAdmin, updateBlogByA);
route.put("/updateBlog/:id", upload.single("image"),auth, updateBlog);

app.use('/',route)
app.listen(5500,()=>{
  Connection();
console.log("server")
})