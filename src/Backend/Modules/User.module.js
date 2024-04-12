const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter UserName"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Correct Email"],
      unique: [true, "Email Already in Use"],
    },
    password: {
      type: String,
      required: [true, "Enter a Strong Password"],
      minlength: [6, "Password Must be atlest 6 char"],
      maxlength: [21, "Password Must be atmost 21 char"],
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
