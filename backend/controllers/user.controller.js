 import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 
 export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({ 
                message: "All fields are required",
                success: false
            });
        }
        const user =await User.findOne({email});
        if(user) {
            return res.status(400).json({ 
                message: "User already exists",
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true
        }); 
    }
    catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ 
            message: "Internal server error",
            success: false
        });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password , role} = req.body;
        if(!email || !password || !role) {
            return res.status(400).json({ 
                message: "Email, password and role are required",
                success: false
            });
        }
        let user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ 
                message: "Invalid credentials",
                success: false
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({ 
                message: "Invalid credentials",
                success: false
            });
        }
        if(user.role !== role) {
            return res.status(403).json({ 
                message: "Access denied for this role",
                success: false
            });
        }
        const tokenData = {
            userId: user._id,
        };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }

        return res.status(200).cookie("token",token,{maxAge:1* 24 * 60 * 60 * 1000,httpsOnly:true,sameSite:'strict'}).json({
            message:`welcome back ${user.fullname}`,
            user,
            success: true,
        })
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ 
            message: "Internal server error",
            success: false
        });
    }
}

export const logout = async (req,res) =>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logout sucessfully",
            success: true
        });
    }catch(error){
        console.log(error);
    }
}

export const updateProfile = async (req,res) =>{
    try{
        const { fullname, email, phoneNumber, bio, skills} = req.body;
        const file = req.file;


        // cloudinary ayega idhar 

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id;  // middleware authentication
        let user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({ 
                message: "User not found",
                success: false
            });
        }

        //update data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio || user.profile.bio;
        if(skillsArray) user.profile.skills = skillsArray || user.profile.skills;

        //resume come later

        await user.save();
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        };
        return res.status(200).json({
            message:"updated profile successfully",
            success: true,
            user    
        })
    }
    catch(error){
        console.log(error);
    }
}
