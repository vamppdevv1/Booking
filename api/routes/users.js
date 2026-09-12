import express from "express";
import { verifyUser, verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getOneUser,
  getAllUsers,
} from "../controllers/user.js";
import { getCount } from "../controllers/room.js";
//config
const router = express.Router();
router.route("/").get(verifyToken,verifyAdmin, getAllUsers);
router.get("/getCount", getCount);
router
  .route("/:id")
  .put(verifyToken, verifyUser, updateUser)
  .delete(verifyToken, verifyUser, deleteUser)
  .get(verifyToken, verifyUser, getOneUser);

export default router;
