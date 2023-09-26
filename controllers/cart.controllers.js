const Cart = require("../models/Cart.model")

module.exports.cartControllers = {
    //Добавление продукта
createCart: async(req,res)=>{
    try {
        const data = await Cart.create({
         accessories: req.body.accessories,
         assembling: req.body.assembling
        })
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
},

// Удаление продукта
deleteCart: async (req,res)=>{
    try {
        const data = await Cart.findByIdAndRemove(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
deleteAll: async (req,res)=>{
    try {
        const data = await Cart.deleteMany({})
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр продуктов
getCart: async (req,res)=>{
    try {
        const data = await Cart.find({}).populate("accessories").populate("assembling")
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
 
}