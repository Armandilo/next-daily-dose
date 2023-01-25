import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    item_name:{
        type:String,
        required:true,
        maxlength:60,
    },
    category:{
        type:String,
      
    },
    price:{
        type: Number,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    status:{
        type:Boolean,
        required:true,
    },
    image:{
        type: String,
        required: true,
    },
   
    


}, {timestamps:true});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);