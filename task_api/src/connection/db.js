const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected using Client");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = { client, connectDB };
