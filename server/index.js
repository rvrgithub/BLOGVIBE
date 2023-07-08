console.log("server site...")
const express  = require("express");

var cors = require('cors') ;
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});
const app = express();
app.use(express.json());
const { Connection } = require("./Connection/Connetion");
app.use(cors);

app.listen(process.env.PROT, ()=>{
    Connection();
    console.log(`Listen At Port ${process.env.PROT}`);
});




