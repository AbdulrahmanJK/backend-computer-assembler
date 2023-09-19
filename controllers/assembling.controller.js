const Assembling = require("../models/Assembling.model")

module.exports.assemblingControllers = {
    //Добавление продукта
createAssembling: async(req,res)=>{
    try {
        const data = await Assembling.create({
            accessories: req.body.accessories
        })
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
},
//Изменение продукта
patchAssembling: async (req,res)=>{
    try {
        const data = await Assembling.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        res.json(error)
    }
},
// Удаление продукта
deleteAssembling: async (req,res)=>{
    try {
        const data = await Assembling.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр продуктов
getAssembling: async (req,res)=>{
    try {
        const data = await Assembling.find().populate("accessories")
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр одного продукта
getOneAssembling: async (req,res)=>{
    try {
        const data = await Assembling.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

}