import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createConnection } from 'mysql2/promise';

dotenv.config();

// MongoDB connection configuration
export const connectToMongo = async () => {
  try {
    console.log('Mongo URI:','mongodb://52.201.183.208:27017/tareita');
    await mongoose.connect('mongodb://52.201.183.208:27017/tareita' as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

// MySQL connection configuration
export const connectToMySQL = async () => {
    try {
        const connection = await createConnection({
            host:'database-1.co7a9umymazi.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'KDF-12345',
            database: 'tareita'
        });
        console.log('Connected to MySQL');
        return connection;
    } catch (error) {
        console.error('Error connecting to MySQL', error);
        process.exit(1);
    }
};



