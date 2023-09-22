const mongoose = require("mongoose")
const assemblingSchema = new mongoose.Schema({
    title:String,
    cpu:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories",

    },
    gpu:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    },
    ram:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    }],
    powerblock:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    },
    drive:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    }],
    body:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    },
    fan:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    }],
    motherboard:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Accessories"
    },
    



})
const Assembling = mongoose.model("Assembling", assemblingSchema)
module.exports = Assembling