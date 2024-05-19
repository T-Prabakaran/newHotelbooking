import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
const router = express.Router();
import Hotel from "../models/Hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/:id", verifyAdmin, getHotel);

//get all
router.get("/", verifyAdmin, getHotels);

export default router;
