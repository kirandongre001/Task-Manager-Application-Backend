const jwt = require("jsonwebtoken");
const { client } = require("../config/db");

const database = client.db("taskmanager");
const usersCollection = database.collection("users");

const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      const user = await usersCollection.findOne({ _id: decoded.id });

      if (!user) {
        return res.status(401).json({ message: "Not authorized, user not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
