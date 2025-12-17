import express from "express";
import { Signup, login, logout, updateProfile} from "../controllers/auth.controllers.js";
import {protectRoute} from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/Signup", Signup);

router.post("/login", login);

router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, (req,res) => res.status(200).json(req.user));
export default router;