import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
} from "../controllers/hotels.js";
//config
const router = express.Router();

router.route("/").post(createHotel).get(getAllHotels);
router.route("/:id").put(updateHotel).delete(deleteHotel).get(getOneHotel);

export default router;
