const express = require("express");
require("dotenv").config(); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MONGO_URI = process.env.MONGO_URI;
mongoose
.connect(MONGO_URI, { useNewUrlParser: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log("err"));

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users/", require("./routes/api/users"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});