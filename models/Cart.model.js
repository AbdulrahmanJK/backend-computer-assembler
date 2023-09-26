const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    accessories:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    },
    assembling:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Assembling"
    }
    
   

})
const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart