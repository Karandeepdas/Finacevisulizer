import 'dotenv/config'
import express from 'express';
import listRouter from './Routes/Listroute.js';
import authRouter from './Routes/Authroute.js';
import Db_connect from './Db/Config.js';
import cors from 'cors'
const app=express();
const PORT = process.env.PORT || 3000;
Db_connect().then(()=>{
   app.listen(PORT,()=>{
    console.log(`listening to port no ${PORT}`);
})
}).catch((err)=>{
    console.log("error while connection")

})
app.use(cors());
app.use(express.json());

app.use('/auth',authRouter)
app.use('/tasks',listRouter)

