import express from "express"
import { createRoom, deleteRoom, getAllRooms, getSingleRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//creating
router.post("/:hotelid", verifyAdmin, createRoom);

//updating
router.put("/:id", verifyAdmin, updateRoom)

//deleting
router.put("/:id/:hotelid", verifyAdmin, deleteRoom);

// show/GET single Room
router.get("/:id", getSingleRoom);

// show/GET all Rooms
router.get("/", getAllRooms);
export default router