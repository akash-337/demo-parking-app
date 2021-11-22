const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  vehicleInfo: [
    {
      cars: {
        type: String,
        required: true,
      },
      vehicleNumber: {
        type: String,
        required: true,
      },
      vehicleName: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Hashing passwords
// before 'save' method while registration
userSchema.pre("save", async function (next) {
  //what to modify
  if (this.isModified("password")) {
    //save the new hash passwords in same name
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    //save
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//adding VehicleInfo Field
userSchema.methods.addVehicleinfo = async function (
  cars,
  vehicleName,
  vehicleNumber
) {
  try {
    this.vehicleInfo = this.vehicleInfo.concat({
      cars,
      vehicleName,
      vehicleNumber,
    });
    await this.save();
    return this.vehicleInfo;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
