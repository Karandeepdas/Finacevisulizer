import User from '../Models/Auth.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Registration=async(req,res)=>{
    
    const{name,email,password}=req.body;
   
    try{
      const existing = await User.findOne({ email });
       if (existing) {
      return res.status(409).json({ message: "Email already registered" });
        }
        const hasedPassword= await bcrypt.hash(password,10)
        const new_user=new User({
            name,
            email,
            password: hasedPassword
        })
        await new_user.save()
        res.status(201).json({message:"account created succesfully"})

    }
    catch(err){
       res.status(500).json({message:"Getting error while registering"})
    }

}

export const Login=async(req,res)=>{
   
   const {email,password}=req.body;
   if(!email||!password){
      return res.status(400).json({ message: "Email and password are required" });
   }
   try{
     const validuser=await User.findOne({email})
     if(!validuser){
       return res.status(400).json({message:"user not found"})
        
     }
     const hasedpass=validuser.password
     const ismatched=await bcrypt.compare(password,hasedpass)
      if(!ismatched){
        return res.status(400).json({message:"invalid user/password"})
     }
    
     const token = jwt.sign({id:validuser._id}, process.env.JWT_SECRET,{expiresIn:"1d"});
    
      res.status(200).json({bearertoken:token,message:"logged in succesfully"})
   }
   catch(err){
       res.status(500).json({message:"error in username/password check if something is undefined"})
   }
}