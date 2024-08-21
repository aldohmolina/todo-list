import { MongoClient } from "mongodb";
let mongoClient: MongoClient;
try {
  if (!process.env.MONGODB_URI)
    throw new Error("Please add your Mongo URI to .env");
  mongoClient = new MongoClient(process.env.MONGODB_URI);
  mongoClient.connect();
} catch (error) {
  console.error("Error connect Mongo DB", error);
  process.exit(1);
}

export default mongoClient;
