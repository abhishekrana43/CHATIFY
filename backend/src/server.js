import express from "express";
import {ENV} from "./lib/env.js"
import authRoutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";



const app = express();
const port = ENV.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

app.listen(port, ()=>{
    console.log("server in running on port:" + port);
    connectDB();

});