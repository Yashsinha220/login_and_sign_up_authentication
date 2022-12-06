const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const URL = "mongodb://localhost:27017/signupDB";

const userdetail = require("./models/User")

// const sighnuproute = require("./routes/SignupRoute")

mongoose.connect(URL, (err) => {
  if (err) {
    console.log("Invalid credentials");
  } else {
    console.log("database connected succesfully");
  }
});

const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));

app.use("/" , require("./routes/SignupRoute"));
app.use("/login" , require("./routes/LoginRoute"));

app.get('/test' , async(req, res) => {
  
  res.send(await userdetail.find({}));

})


app.listen(PORT, () => {
  console.log(`Server is runnig : http://localhost:${PORT}`);
});
