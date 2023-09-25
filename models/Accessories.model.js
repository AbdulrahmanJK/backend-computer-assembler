const mongoose = require("mongoose")
const accessoriesSchema = new mongoose.Schema({
    linkModel:String,
    image: String,
    title: String,
    price: Number,
    attributes: String,
    socket: String,
    scetchImg: String,
    category:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },

})
const Accessories = mongoose.model("Accessories", accessoriesSchema)
module.exports = Accessories