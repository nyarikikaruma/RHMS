import mongoose from 'mongoose';
const runtimeConfig = useRuntimeConfig()

const MONGO_URI = runtimeConfig.apiSecret || 'mongodb://localhost:27017/qr_attendance';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

// Initialize connection
connectDB();
