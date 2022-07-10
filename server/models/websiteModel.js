const mongoose = require("mongoose");
const { Schema } = mongoose;
const uuid = require("uuid");
const encryption = require("../utils/encryption");

const websiteSchema = new Schema(
  {
    _id: {
      type: String,
      trim: true,
      required: true,
      default: uuid.v4,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 11,
      enum: ["wordpress", "woocommerce"],
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
    },

    admin_url: {
      type: String,
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

    base64string: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

websiteSchema.pre("save", function (next) {
  const website = this;

  const { encryptedPassword, base64data } = encryption.encrypt(
    website.password
  );

  website.password = encryptedPassword;
  website.base64string = base64data;
  next();
});

websiteSchema.post("findOne", function (result) {
  const decryptedPassword = encryption.decrypt(
    result.base64string,
    result.password
  );
  delete result._doc.base64string;
  result.password = decryptedPassword;
});

const websiteModel = mongoose.model("websites", websiteSchema);

module.exports = websiteModel;
