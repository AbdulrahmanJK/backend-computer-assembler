const Assembling = require("../models/Assembling.model");

module.exports.assemblingControllers = {
  //Добавление продукта
  createAssembling: async (req, res) => {
    try {
      const data = await Assembling.create({
        title: req.body.title,
        cpu: req.body.cpu,
        gpu: req.body.gpu,
        ram: req.body.ram,
        powerblock: req.body.powerblock,
        drive: req.body.drive,
        body: req.body.body,
        fan: req.body.fan,
        motherboard: req.body.motherboard,
        user: req.body.user
      });
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  //Изменение продукта
  patchAssembling: async (req, res) => {
    try {
      const data = await Assembling.findByIdAndUpdate(req.params.id, req.body);
    } catch (error) {
      res.json(error);
    }
  },
  // Удаление продукта
  deleteAssembling: async (req, res) => {
    try {
      const data = await Assembling.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  // Просмотр продуктов
  getAssembling: async (req, res) => {
    try {
      const data = await Assembling.find({})
        .populate("cpu")
        .populate("gpu")
        .populate("motherboard")
        .populate("fan")
        .populate("body")
        .populate("drive")
        .populate("powerblock")
        .populate("ram")
        .populate("");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  // Просмотр одного продукта
  getOneAssembling: async (req, res) => {
    try {
      const data = await Assembling.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
