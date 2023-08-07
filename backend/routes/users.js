const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");
// const passwordComplexity = require("joi-password-complexity");
const { User, validateUser } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details.message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  try {
    const user = new User(
      _.pick(req.body, [
        "firstName",
        "lastName",
        "email",
        "password",
        "dob",
        "gender",
      ])
    );

    user.email = user.email.toLowerCase();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send("User signed up successfully.");
  } catch (ex) {
    for (let field in ex.errors) {
      console.log(ex.errors[field].message);
    }
  }
});

module.exports = router;

// let isValid = passwordComplexity().validate(user.password);
// console.log(isValid.error);
// if (!isValid)
//   return res.status(422).send("Please choose a stronger password");
