import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:60,
    },
    img:{
        type: String,
        required: true,
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


}, {timestamps:true});

export default mongoose.models.Product || mongoose.model("Order", OrderSchema);