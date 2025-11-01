import List from '../Models/List.js'
export const addList=async(req,res)=>{
    try{
     const newList=new List({
        title:req.body.title,
        price:req.body.price,
        date:req.body.date,
        owner:req.user.id
     })
     await newList.save();
     res.status(201).json({message:"saved the item"});
    }
    catch(err){
        res.status(500).json({message:"gettting error while adding items"})
    }

}
export const updateList=async(req,res)=>{
    try{
     const ans= await List.findOneAndUpdate(
      {_id:req.params.id,owner:req.user.id},
      {$set:req.body},
      {new: true}
     );
      if(!ans){
         return res.status(404).json({message:"problem while updating"})
      }
      res.status(200).json({message:"updated sucessfully"});
    }
    catch(err){
       res.status(500).json({message:"gettting error while updating items"})
    }

}
export const deleteList=async(req,res)=>{
   try{
    const ans=await List.findOneAndDelete(
      {_id:req.params.id,owner:req.user.id}
    )
    if(!ans){
         return res.status(404).json({message:"problem while updating"})
    }
    res.status(200).json({message:"deleted succesfully"});
   }
   catch(err){
       res.status(500).json({message:"gettting error while deleting items"})
   }

}
export const getList=async(req,res)=>{
   try{
   const items=await List.find({owner:req.user.id});
   res.status(200).json({items})
   }
   catch(err){
      res.status(500).json({message:"getting error while fetching item"})
   }
}