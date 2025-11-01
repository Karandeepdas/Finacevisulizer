
import { UserSchema} from './Validation.js'
import { ListSchema } from './Validation.js'
export const userValidate=(req,res,next)=>{
  
   const result=UserSchema.safeParse(req.body)
   if(result.success){
      next()   
   }
   else{
       res.status(400).json({message:"inavlid user data",error:result.error.format()})
   }
   
}

export const listValidate=(req,res,next)=>{
    
    const result=ListSchema.safeParse(req.body)
    if(result.success){
        next();
    }
    else{
        res.status(400).json({message:"invalid todo list",error:result.error.format()})
    }
}
