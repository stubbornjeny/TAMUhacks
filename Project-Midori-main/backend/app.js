const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = 8080;
var corsOptions = {
  origin: "*", // restrict calls to those this address
};

app.use(cors(corsOptions));
mongoose.connect(process.env.MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", () => {
  console.log("error connecting to mongo");
});
app.use(express.json());

require("./app/routes/auth.routes")(app);

app.listen(PORT, () => {
  console.log("Server is runnng at port", PORT);
});
