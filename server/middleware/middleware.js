const jwt = require("jsonwebtoken");
const { User } = require("../Model/userModel");
const { Admin } = require("../Model/adminModel");

exports.auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("token", token);
  const decode = jwt.verify(token, "radhika");
  console.log("decode", decode);
  const findUser = await User.findOne({ _id: decode.id });

  if (findUser) {
    // console.log("userFind", findUser);
    req.user = findUser;
  } else {
    const findAdmin = await Admin.findOne({ _id: decode.id });
    if (!findAdmin) {
      return res.status(401).send({
        status: false,
        message: "Invalid Token",
      });
    } else {
      // console.log("findAdmin", findAdmin);
      req.user = findAdmin;
    }
  }
  next();
};


exports.authAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("token", token);
  const decode = jwt.verify(token, "radhika");
  console.log("decode", decode);
    const findAdmin = await Admin.findOne({ _id: decode.id });
    if (!findAdmin) {
      return res.status(401).send({
        status: false,
        message: "Invalid Token",
      });
    } else {
      console.log("findAdmin", findAdmin);
      req.user = findAdmin;
    }
  // }
  next();
};
