import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
  countByCity,
  countByType
} from "../controllers/hotel.js";
//config
const router = express.Router();

router.route("/").post(verifyToken, verifyAdmin, createHotel).get(getAllHotels);
router.get("/countByCity", countByCity)
router.get("/countByType", countByType);
router
  .route("/:id")
  .put(verifyToken, verifyAdmin, updateHotel)
  .delete(verifyToken, verifyAdmin, deleteHotel)
  .get( getOneHotel);

export default router;
