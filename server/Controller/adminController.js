const { Admin } = require("../Model/adminModel");
const { isValidName, isValidEmail, isValidPwd } = require("../Util/validation");
const bcrypt = require("bcrypt")
exports.adminRegister = async (req, res) => {
  const { email, name, password, phoneNumber } = req.body;
  console.log("req.body ", req.body);
  try {
    if (Object.keys(req.body).length === 0) {
      console.log("req.body");
      return res.status(401).send({
        stauts: false,
        massage: "All Credientials Are Required.. !!",
      });
    }

    // .......................All Credientials Are Required....................
    if (!name || !email || !password) {
      console.log("all are required");
      return res.status(401).send({
        stauts: false,
        massage: "All Credientials Are Required.. !!",
      });
    }
    //.......................error inside name.......................
    if (!isValidName(name)) {
      console.log("all are required");
      return res.status(401).send({
        stauts: false,
        massage: "Only String valid !!",
      });
    }

    //  .......................error inside email .......................
    if (!isValidEmail(email)) {
      console.log("all are required");
      return res.status(401).send({
        stauts: false,
        massage: "email is not valid !!",
      });
    }

    // ....................... error inside password .......................
    if (!isValidPwd(password)) {
      console.log("all are required");
      return res.status(401).send({
        stauts: false,
        massage: "password is not valid !!",
      });
    }

    // ....................find Admin  ..................................
    const checkPassword = await Admin.findOne({ email });
    // console.log("chec" ,checkPassword);

    //  .......................chack Admin if alreay register ........
    if (checkPassword) {
      return res.status(401).json({
        stauts: false,
        massage: "already register!!",
      });
    } else {
      // .......................create password strong ......
      const hasmapPassword = await bcrypt.hash(password, 10);
      console.log("hasjhg ", hasmapPassword);
      const response = new Admin({
        name,
        password: hasmapPassword,
        email,
        phoneNumber,
      });

      await response.save();
      return res.status(201).json({
        stauts: true,
        massage: "register succesfully!!",
        response,
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(401).json({
      stauts: false,

      massage: "Something Wrong !!",
      error,
    });
  }
};
