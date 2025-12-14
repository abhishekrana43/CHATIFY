import User from "../models/User.model.js"
import bcrypt from "bcryptjs"
import { generateToken} from "../lib/utils.js";

export const Signup = async(req,res) =>{
   const {fullName, email, password} = req.body;

   try {
    if(!fullName || !email || !password){
        return res.status(400).json({message:"All fields are required"});

    }
    if(password.lenght < 6){
       return res.status(400).json({message:"Password must be atleast 6 characters"});

    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({message:"Invlaid email format"});

    }

    const user = await User.findOne(email);
    if(user) return res.status(400).json({message:"Email already exists"});

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        fullName,
        email,
        password:hashPassword
    })
    if(newUser){
        generateToken(newUser, _id,res);
        await newUser.save();

        res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,

        }) 
    }
    else{
        res.status(400).json({message:"Invalid user data"});
    }
   }
    catch (error) {
    console.log("Error in signup controller:", error);
    res.status(500).json({message:"Internal server error"});
      }
    }
