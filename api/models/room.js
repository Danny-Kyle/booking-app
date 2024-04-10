import mongoose from "mongoose";
const RoomSchema = mongoose(
    {
        title:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        maxPeople:{
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        roomNumber: [{number: Number, unavailableDates: {type: [Date]}}]
    },
    {timestamps: true},
);

const Room = mongoose.model("Room");
export default Room;