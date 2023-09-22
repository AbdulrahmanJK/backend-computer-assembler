const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    title: String,
    image:String
   

})
const Category = mongoose.model("Category", categorySchema)
module.exports = Category