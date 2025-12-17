import mongoose from "mongoose"
import {ENV} from "../lib/env.js"

export const connectDB = async () =>{

    try {
        const conn = await mongoose.connect(ENV.MONGO_URL)
        console.log("MONGOOSE CONNECTED:", conn.connection.host)
    } catch (error) {
        console.log("Error connection to MONGODB:", error)
    }
}