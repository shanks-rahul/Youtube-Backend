import jwt from "jsonwebtoken"
import users from '../models/auth.js'

export const login =async(req,res)=>{
    const {email}=req.body;
    console.log(req.body);
    try {
        const exisitingUser=await users.findOne({email});
        if(!exisitingUser){
            try {
                const newUser=await users.create({email});

                const token=jwt.sign({
                    email:newUser.email,id:newUser._id
                },
                process.env.SECRET,{
                    expiresIn:"1h"
                })
                res.status(200).json({result:newUser,token})
            } catch (error) {
                res.status(500).json({message:"Something went wrong..."});
            }
        }
        else{
            const token=jwt.sign({
                email:exisitingUser.email,id:newUser._id
            },
            process.env.SECRET,{
                expiresIn:"1h"
            })
            res.status(200).json({result:exisitingUser,token})
            
        }
    } catch (error) {
        res.status(500).json({message:"something went wrong..."})
    }
}