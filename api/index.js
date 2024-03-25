import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"
import userRoute from "./routes/users.js"
const app = express()
const port = 5000
dotenv.config()

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error
    }   
}

//middlewares
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something ain't right"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB")
})

app.get("/users", (req, res) => {
    res.send("hello first request")
})

app.listen(port, () => {
    connect()
    console.log('listening on port' + port)
})