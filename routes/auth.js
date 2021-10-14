const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


/* ------------------- REGISTRATION ROUTER -------------*/

// registration router....
router.post("/register", (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].massage);

  // checking if Email exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(400)
      .send("email ID already exist try with another email ID");

  // Hashing password
  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  // saving the data in DB
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

/*----------------- LOGIN ROUTER -----------------------*/  

// Login router....
router.post("/login", (req, res) => {
  const { error } = loginValidation(req, res);
  if (error) return res.status(400).send(error.details[0].massage);

  // checking if Email exist
  const userdata = await User.findOne({ email: req.body.email });
  if (!userdata) return res.status(400).send("you have enterd invalid email");

  // checking if password exist
  const validPassword = await bcrypt.compare(
    req.body.password,
    userdata.password
  );
  if (!validPassword) res.status(400).send(" invalid password");


    // create and assign a token
    const token = 

  try {
    res.send("succesfully loged in");
  } catch (error) {
    res.send({ massage: error.massage });
  }
});

module.exports = router;
