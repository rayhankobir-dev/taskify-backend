const { Router } = require("express");
const { loginUser, signupUser } = require("../controllers/user");

const router = new Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.get("/profile", (req, res) => {
  res.send("Profile");
});

module.exports = { user: router };
