import express from "express"
import hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();
//creating
router.post("/", createHotel);

//updating
router.put("/:id", updateHotel)

//deleting
router.put("/:id", deleteHotel);

// show/GET single hotel
router.get("/:id", getSingleHotel);

// show/GET all hotels
router.get("/", getAllHotels);

export default router