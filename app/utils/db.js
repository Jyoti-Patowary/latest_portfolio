import mongoose from 'mongoose';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const connectionString = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@employee.lubsn6h.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Employee`;

let db;

async function connectToDatabase() {
  if (db) {
    console.log('Using existing MongoDB connection');
    return db;
  }

  try {
    const client = await mongoose.connect(connectionString, {
      // useCreateIndex: true, 
      // useFindAndModify: false,
    });

    db = client.connection.db;  
    console.log('Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase