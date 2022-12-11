const path = require("path");
const { rawListeners } = require("../models/User");

const userdetail = require("../models/User");
const getsignupform = async (req, res) => {
  res.status(200).send(await userdetail.find({}))
};

const getloginform = async (req, res) => {
  res.status(200).send("sending the login form");
};

const usersignup = async (req, res) => {
  const { uname, email, password } = req.body;

  if (!uname || !email || !password) {
    res.status(400).send("invalid request");
  }

  const prevUser = await userdetail.findOne({ email });
  if (prevUser) {
    res.send("user already exist");
  } else {
    await userdetail.create({ uname, email, password });
    res.send("Account created ");
  }
  console.log(uname, email, password);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("please enter the details");
  }

  // need to find the one element hence we use the findone

  const users = await userdetail.findOne({ email, password });

  // need to compare teh

  if (users && email == users.email && users && password == users.password) {
    res.send("hi welcome to our site");
  } else {
    res.status(400).send("invalid credetials");
  }
};

module.exports = { userLogin, usersignup, getsignupform, getloginform };
