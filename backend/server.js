const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const taskmanagerroutes = require("./routes/TaskManagerRoutes");
//use to test on postman
app.use("/api/taskmanager", taskmanagerroutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});