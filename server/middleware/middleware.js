const  jwt = require("jsonwebtoken");
const { User } = require("../Model/userModel");

exports.auth = async(req,res,next)=>{
    const token= req.headers.authorization.split(" ")[1];
    console.log("token" ,token);
    const decode = jwt.verify(token , "dsjglsdkjhgkldjfg");
    const findUser = await User.findOne({_id:decode.id}) ;
    console.log("userFind" ,findUser);
    req.user = findUser;
    next();
}