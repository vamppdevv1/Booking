import express from "express";
import { verifyUser, verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getOneUser,
  getAllUsers,
} from "../controllers/user.js";
//config
const router = express.Router();
router.route("/").get(verifyAdmin,getAllUsers);
router
  .route("/:id")
  .put(verifyToken, verifyUser, updateUser)
  .delete(verifyToken, verifyUser, deleteUser)
  .get(verifyToken, verifyUser, getOneUser);

export default router;
