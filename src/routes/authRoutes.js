import express from "express"
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
