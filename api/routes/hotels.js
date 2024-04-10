import express from "express"
import hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//creating
router.post("/", verifyAdmin, createHotel);

//updating
router.put("/:id", verifyAdmin, updateHotel)

//deleting
router.put("/:id", verifyAdmin, deleteHotel);

// show/GET single hotel
router.get("/:id", getSingleHotel);

// show/GET all hotels
router.get("/", getAllHotels);

export default router