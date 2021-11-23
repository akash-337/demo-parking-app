const express = require("express");
const User = require("../model/userSchema");
const Vehicle = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");
require("../db/conn");

// User Registeration
router.post("/register", async (req, res) => {
  //getting user register data from frontend
  const { username, email, phone, password, cpassword } = req.body;
  //checking if all field are filled by user
  if (!username || !email || !phone || !password || !cpassword) {
    return res.status(400).json({ error: "field empty" });
  }
  //checking if user already exists
  try {
    const userExists = await User.findOne({ email: email });
    //if already exists
    if (userExists) {
      return res.status(400).json({ error: "user already exists" });
      //if password and cpassword doesnt match
    } else if (password != cpassword) {
      return res.status(400).json({ error: "Password didnt match" });
    } else {
      //if not .. create new user and save
      const user = new User({ username, email, phone, password, cpassword });
      const userRegister = await user.save();
      //if saved successfully
      if (userRegister) {
        res.status(201).json({ message: "Registered successfully" });
      } else {
        res.status(500).json({ error: "error while saving" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Signin Route & validation
router.post("/signin", async (req, res) => {
  try {
    //get credentials filled by user in frontend
    const { email, password } = req.body;

    //if either field empty
    if (!email || !password) {
      return res.status(400).json({ error: "field empty" });
    }
    //matching credentials filled by user with DB
    //email match
    const userLogin = await User.findOne({ email: email });
    //password match
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //token
      const token = await userLogin.generateAuthToken();
      //storing token inside cookie
      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      //   sameSite: app.get("env") === "development" ? true : "none",
      //   secure: app.get("env") === "development" ? false : true,
      // });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "Login Successful", jwtoken: token });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

//Vehicle info
router.post("/vehicleinfo", authenticate, async (req, res) => {
  //getting user register data from frontend
  const { cars, vehicleNumber, vehicleName } = req.body;
  //checking if all field are filled by user
  if (!cars || !vehicleNumber || !vehicleName) {
    console.log("field empty");
    return res.status(400).json({ error: "field empty" });
  }
  try {
    // checking if user already exists on DB by _id
    const userExists = await User.findOne({ _id: req.UserID });
    //if user found
    if (userExists) {
      const userVehicleinfo = await userExists.addVehicleinfo(
        cars,
        vehicleNumber,
        vehicleName
      );
      await userExists.save();
      res.status(201).json({ message: "Vehicle info saved" });
    }
  } catch (error) {
    console.log(error);
  }
});

// authenticating user on Vehicle Register page(middleware)
router.post("/vehicleregister", authenticate, (req, res) => {
  console.log("hello about");
  res.send(req.rootUser);
});

module.exports = router;
