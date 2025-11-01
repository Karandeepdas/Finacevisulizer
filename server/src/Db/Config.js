import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
async function Db_connect(){
    try{
       
      const str=process.env.MONGOURL;
      await mongoose.connect(str)
      console.log("connection sucessfully done");
    }
    catch(err){
       console.log("the value is "+process.env.PORT);
       console.log("connection failed", err);
       throw err;
    }
}
export default Db_connect;