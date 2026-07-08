import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getOneRoom,
  getAllRooms,
} from "../controllers/room.js";
//config
const router = express.Router();
router.route("/:hotelId").post(verifyToken, verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.delete("/:id/hotelId", verifyToken, verifyAdmin, deleteRoom);
router
  .route("/:id")
  .put(verifyToken, verifyAdmin, updateRoom)
  .get(verifyToken, getOneRoom);

export default router;
