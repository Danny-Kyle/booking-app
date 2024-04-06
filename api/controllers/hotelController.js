import hotel from "../models/hotel.js"; 
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
    try{
        const updatedHotel = await hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
};

export const deleteHotel  = async (req, res, next) => {
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted successfully!");
    }catch(err){
        next(err);
    }
}

export const getSingleHotel = async (req, res, next) => {
    try{
        const hotel = await hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}

export const getAllHotels = async (req, res, next) => {
    const failed = true;
    if(failed) return next(createError(401, "You aren't authenticated!"))
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err)
    }
}