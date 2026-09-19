import mongoose from "mongoose";

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const connectionString = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@employee.lubsn6h.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Employee`;

let db;
let lastFailedTime = 0;
const FAIL_COOLDOWN_MS = 60000; // 1 minute cooldown if MongoDB connection fails

async function connectToDatabase() {
  if (db) {
    return db;
  }

  // Fast-fail if credentials are not configured or connection recently failed
  if (!MONGO_USERNAME || !MONGO_PASSWORD) {
    throw new Error("MongoDB credentials not configured");
  }

  if (Date.now() - lastFailedTime < FAIL_COOLDOWN_MS) {
    throw new Error("MongoDB recently failed, fast-failing to preserve load speed");
  }

  try {
    const client = await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 1200, // Fail in 1.2s instead of default 30s
      connectTimeoutMS: 1200,
      socketTimeoutMS: 2000,
    });

    db = client.connection.db;
    return db;
  } catch (error) {
    lastFailedTime = Date.now();
    throw error;
  }
}

export default connectToDatabase;