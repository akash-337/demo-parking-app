const dotenv = require("dotenv");
const express = require("express");
const app = express();
var cors = require("cors");
const path = require('path');


var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  
};
app.use(cors(corsOptions));

//import env file
dotenv.config({ path: "./config.env" });

//import DB connection file
require("./db/conn");
// const User = require("./model/userSchema");

// for json
app.use(express.json());

// require router/route file
app.use('/app',require("./router/auth"));

app.use(express.static("parking/build"))


app.get('*', (_, res) => res.sendFile(path.resolve('parking', 'build', 'index.html')));

//import port no. from env file
const PORT = process.env.PORT || 5000;


// if(process.env.NODE_ENV == "production"){
// }


app.listen(PORT, () => {
  console.log(`server has started on port no. ${PORT}`);
});
