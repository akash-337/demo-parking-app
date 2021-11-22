const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    //request token
    const token = req.body.jwtoken;
    //verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    //if verified .. token belong to which user
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    //if user not found
    if (!rootUser) {
      throw new Error("user not found");
    }
    //if found fetching user data
    req.token = token;
    req.rootUser = rootUser;
    req.UserID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("unauthorized:No token Provided");
    console.log(error);
  }
};

module.exports = authenticate;
