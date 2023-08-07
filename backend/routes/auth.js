const express = require("express");
const router = express.Router();
const Joi = require("joi");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const auth = require("../middlewares/auth");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details);

  let user = await User.findOne({
    email: req.body.email.toLowerCase(),
  });

  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = jwt.sign(
    {
      _id: user.id,
    },
    process.env.jwtSecretKey
  );

  res.header("x-auth-token", token).json({
    lastName: user.lastName,
    token: token,
    message: "User signed in successfully.",
  });
});

router.post("/user/details", auth, async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId).select(
    "firstName lastName dob gender"
  );
  res.status(200).json({ user, message: "Valid token." });
});

router.post("/logout", (req, res) => {
  res.status(200).send("Token removed successfully.");
});

const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
};

module.exports = router;
