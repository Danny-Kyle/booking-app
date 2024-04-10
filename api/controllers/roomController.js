import Room from "../models/room";
import Hotel from "../models/hotel";
import {createError} from "../utils/error.js"

export const createRoom = async(res, req, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id},});
        }catch(err){
            next(err);
        }
    }catch(err){
        next(err);
    }

}
