import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    item:{
        type: Array,
        required:true,
    },
    total:{
        type: Number,
        required: true,
    },
   

}, {timestamps:true});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);