import jwt from 'jsonwebtoken';

export function Authentication(req,res,next){
   const header=req.headers['authorization']
   if(!header || !header.startsWith('Bearer ')){
    return  res.status(401).json({message:"authentication failed !Token is missing"});
   }
    const token=header.split(' ')[1];
   try{
     const payload=jwt.verify(token,process.env.JWT_SECRET);
     req.user={id:payload.id};
     next();
   }
   catch(err){
    let msg = 'Authentication failed: Invalid token';

    if (err.name === 'TokenExpiredError') {
      msg = 'Authentication failed: Token expired';
    }
    res.status(401).json({message:msg});
   }
}
