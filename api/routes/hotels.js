import express from "express"
import hotel from "../models/hotel.js";

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
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500).json(err)
    }
})

export default router