import mongoose from 'mongoose'
const { schema }  = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    type: {
        type: string,
        required: true
    },
    city: {
        type: string,
        required: true
    },
    address: {
        type: string,
        required: true
    },
    distance: {
        type: string,
        required: true
    },
    photos: {
        type: [string],
    },
    desc: {
        type: string,
        required: true
    },
    rating: {
        type: string,
        required: true
    }
})

export default mongoose.model("Hotel", HotelSchema)