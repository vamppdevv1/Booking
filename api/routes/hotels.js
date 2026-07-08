import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
} from "../controllers/hotel.js";
//config
const router = express.Router();

router.route("/").post(verifyToken, verifyAdmin, createHotel).get(getAllHotels);
router
  .route("/:id")
  .put(verifyToken, verifyAdmin, updateHotel)
  .delete(verifyToken, verifyAdmin, deleteHotel)
  .get(verifyToken, getOneHotel);

export default router;
