import { MongoClient } from "mongodb";
let client: MongoClient;
try {
  if (!process.env.MONGODB_URI)
    throw new Error("Please add your Mongo URI to .env");
  client = new MongoClient(process.env.MONGODB_URI);
  client.connect();
} catch (error) {
  console.error("Error connect Mongo DB", error);
  process.exit(1);
}

export default client;
