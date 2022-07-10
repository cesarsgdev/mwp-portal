const mongoose = require("mongoose");
const { Schema } = mongoose;

const websiteSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
      enum: ["wordpress", "woocommerce"],
    },

    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 11,
    },

    user: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      maxlength: 50,
    },

    admin_url: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "users",
    },
  },
  { timestamps: true }
);

const websiteModel = mongoose.model("websites", websiteSchema);

module.exports = websiteModel;
