const Accessories = require("../models/Accessories.model")

module.exports.accessoriesControllers = {
    //Добавление продукта
createAccessories: async(req,res)=>{
    try {
        const data = await Accessories.create({
            image: req.body.image,
            title: req.body.title,
            price: req.body.price,
            attributes: req.body.attributes,
            socket: req.body.socket,
            category: req.body.category,
            linkModel:req.body.linkModel
        })
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
},
//Изменение продукта
patchAccessories: async (req,res)=>{
    try {
        const data = await Accessories.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        res.json(error)
    }
},
// Удаление продукта
deleteAccessories: async (req,res)=>{
    try {
        const data = await Accessories.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр продуктов
getAccessories: async (req,res)=>{
    try {
        const data = await Accessories.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр одного продукта
getOneAccessory: async (req,res)=>{
    try {
        const data = await Accessories.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
getAllCategories: async (req, res) => {
    const accessories = await Accessories.find({category: req.params.id})
    res.json(accessories)
},
 
}