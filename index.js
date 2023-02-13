const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const admin=require("./routes/adminRoutes")
const clientsRouts = require("./routes/clientsRouts");

// Initializing express
const app = express();
const port = process.env.PORT;

// middle-ware setup
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/client", clientsRouts);
app.use("/api/admin", admin);

// MongoDB connection
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected")
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Port ${port} is active`);
});



