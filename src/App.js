const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// import { connectDB } from "./connection/db"
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require("./connection/db");

dotenv.config();
connectDB

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
