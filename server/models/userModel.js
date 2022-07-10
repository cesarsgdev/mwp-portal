const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      maxlength: 50,
    },

    roles: [{ type: String, required: true, default: "client" }],

    devs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
