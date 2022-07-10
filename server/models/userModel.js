const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const saltRounds = 15;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      maxlength: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      maxlength: 50,
    },

    roles: {
      type: [String],
      required: true,
      default: "client",
    },

    devs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "users",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) throw err;
      else {
        user.password = hash;
        next();
      }
    });
  });
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
