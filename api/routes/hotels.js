import express from "express";
import { verifyUser, verifyAdmin, verifyToken } from "../utils/verifyToken.js";

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
} from "../controllers/hotel.js";
//config
const router = express.Router();

router.route("/").post(verifyAdmin, createHotel).get( getAllHotels);
router
  .route("/:id")
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel)
  .get(getOneHotel);

export default router;
