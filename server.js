const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportjwt = require("passport-jwt");
const cors = require("cors");

const user = require("./routes/api/user");

const app = express();

//applying middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connecting database URI
const db = require("./config/default").mongoURI;

//connecting to mongoATLAS
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

//passport middleware
app.use(passport.initialize());

require("./config/passport")(passport);

//using Routes
app.use("/api/user", user);

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
