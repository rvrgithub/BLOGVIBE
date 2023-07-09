const express = require("express");
 require("dotenv").config();
const app = express();
app.use(express.json());
const { route } = require("./route/route");
const { Connection } = require("./Connection/Connetion");

app.use("/" ,route);

app.listen(process.env.PORT, () => {
  Connection();
  console.log(`Listen At Port ${process.env.PORT}`);
});


//  use of .env
//  install
// create .env file  -> creidetail  
// dotenv (import) -> .method call -> dotenv.config (call) -> proesses.env.NAME

