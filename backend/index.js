require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");

mongoose
  .connect(
    "mongodb+srv://syedhassnainkazmi07:qdUY2gHXc4agoxaS@user-authentication-sys.esf2yvi.mongodb.net/users?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Could not connect to MongoDB...", error));

app.use(express.json());
app.use(cors());

app.use("/api/user", users);
app.use("/api/auth", auth);

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
