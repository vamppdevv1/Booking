import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors"
//config
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
//mongodb connection
const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`);
    console.log("database connected!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
//routes 
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/hotels", hotelsRoutes);
//server connection
app.listen(8800, () => {
  connect();
  console.log("listening on port 8800");
});
//error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  }); 
});