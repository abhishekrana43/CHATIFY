import express from "express";

const router = express.Router();


router.get("/Signup", (req,res) =>{
    res.send("Signup endpoint");
});

router.get("/Signin", (req,res) =>{
    res.send("Signin endpoint");
});

router.get("/login", (req,res) =>{
    res.send("Login endpoint");
});

router.get("/logout", (req,res) =>{
    res.send("Logout endpoint");
});

export default router;