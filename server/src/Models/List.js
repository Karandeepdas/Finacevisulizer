import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const listSchema = new Schema({
  title:{
    type:String,
    required:true
},
  price:{
    type:Number,
    required:true,
    min:0
  },
  date: {
    type:Date,
    default:Date.now
  },
  owner:{
     type:Schema.Types.ObjectId,
     ref:'user',
     required:true
  }
},{timestamps:true});

const List = model('list', listSchema);
export default List;