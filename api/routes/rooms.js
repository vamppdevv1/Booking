import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getOneRoom,
  getAllRooms,
  updateRoomAvailability,
  getCount,
} from "../controllers/room.js";
//config
const router = express.Router();
router.route("/:hotelId").post(verifyToken, verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.get("/getCount", getCount);
router.delete("/:id/hotelId", verifyToken, verifyAdmin, deleteRoom);
router.put("/availability/:id",updateRoomAvailability);
router
  .route("/:id")
  .put(verifyToken, verifyAdmin, updateRoom)
  .get(verifyToken, getOneRoom);

export default router;
