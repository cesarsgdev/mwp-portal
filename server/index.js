const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/usersRoute");
const login = require("./routes/loginRoute");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/login", login);
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.status(200).json({ message: `This is the main route` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected...`);
  } catch (e) {
    console.log(e.message);
  }
});
