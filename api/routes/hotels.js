import express from "express"
import hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();
//creating
router.post("/", async (req, res) => {
    const newHotel = new hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})

//updating
router.put("/:id", async (req, res) => {
    try{
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500).json(err)
    }
})

//deleting
router.put("/:id", async (req, res) => {
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted successfully!");
    }catch(err){
        res.status(500).json(err)
    }
})

// show/GET single hotel
router.get("/:id", async (req, res) => {
    try{
        const hotel = await hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err)
    }
});

// show/GET all hotels
router.get("/", async (req, res, next) => {
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err)
    }
});

export default router