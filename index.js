const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://0.0.0.0:27017/Data_Duplication_Download_Alert_System"
);

const express = require("express");
const app = express();

// Serve static files from 'public' folder
app.use(express.static("public"));

// For user routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

// For admin routes
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);

app.listen(3000, function () {
  console.log("Server is Running ...");
});
