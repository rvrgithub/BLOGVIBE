const express = require("express");
const { register, login, getAll, profile, updateProfile } = require("../Controller/userController");
const { auth } = require("../middleware/middleware");
const route = express.Router();
route.post("/register", register);
route.post("/login", login);
route.get("/getAll", auth, getAll);
route.get("/profile" ,auth, profile);
route.put("/updateProfile", auth , updateProfile)
module.exports = { route };
