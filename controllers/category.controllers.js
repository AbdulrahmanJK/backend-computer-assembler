const Category = require("../models/Category.model")

module.exports.categoryControllers = {
    //Добавление категории
createCategory: async(req,res)=>{
    try {
        const data = await Category.create({
          title: req.body.title,
          image: req.body.image
        })
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр категории
getCategory: async (req,res)=>{
    try {
        const data = await Category.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}
}
