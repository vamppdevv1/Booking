import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoutes from "./routes/users"
import authRoutes from "./routes/auth";
import hotelsRoutes from "./routes/hotels";
import roomsRoutes from "./routes/rooms";
//config
dotenv.config();
//mongodb connection
const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`);
    console.log("database connected");
  } catch (error) {
    throw error;
  }
};
mongoose.connection("disconnected", () => {
  console.log("mongodb disconnected");
});
//routes
app.use("/api/auth",authRoutes)
app.use("/api/users", usersRoutes);
app.use("/api/rooms", roomsRoutes );
app.use("/api/hotels", hotelsRoutes);
//server connection
const app = express();
app.listen(8800, () => {
  connect();
  console.log("listening on port 8800");
});
