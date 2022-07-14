const mongoose = require("mongoose");
const uuid = require("uuid");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v4,
    },

    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 10,
      maxlength: 50,
    },

    category: {
      type: String,
      trim: true,
      required: true,
      enum: [
        "New Site",
        "New Features",
        "New Post",
        "Woocommerce",
        "Styling (CSS)",
        "Installation & Setup",
        "Updates",
        "Migrations",
        "Backups",
        "Security",
        "Optimization",
        "Consulting / Questions",
        "Other",
      ],
    },

    instructions: {
      type: String,
      trim: true,
      required: true,
      minlength: 1,
    },

    status: {
      type: String,
      trim: true,
      required: true,
      enum: ["open", "working", "completed"],
      default: "open",
    },

    dev_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      trim: true,
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      trim: true,
    },

    website_id: {
      type: String,
      ref: "websites",
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;
