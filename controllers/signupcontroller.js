const path = require("path");
const { rawListeners } = require("../models/User");

const userdetail = require("../models/User");
const getsignupform = async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/signup.html"));
};

const getloginform = async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html",))
}

const usersignup = async (req, res) => {
  const { uname, email, password } = req.body;

  if(!uname || !email ||!password) {res.status(400).sendFile("invalid request")}

  const prevUser = await userdetail.findOne({ email });
  if (prevUser) {
    res.send("user already exist");
  } else {
    await userdetail.create({  uname, email, password });
    res.send("thanks for entering the value ");
  }
  console.log(uname, email, password);
};


const userLogin = async (req, res) => {

    const {email , password } = req.body;
    if(!email ||!password) {res.send("please enter the details")};

    // need to find the one element hence we use the findone

   const users= await userdetail.findOne({email , password });

    // need to compare teh 

    if(email == users.email && password == users.password){
    res.send("hi welcome to our site")
    }
    else{
        res.send("invalid credetials")
    }
}
module.exports = { userLogin, usersignup  , getsignupform , getloginform};
