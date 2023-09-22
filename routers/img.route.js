const { Router } = require("express");
const imgMiddleware = require("../middlewares/imgMiddleware")
const imageController = require("../controllers/image.controller")
const router = Router()

router.post("/upload/img", imgMiddleware.single('image'), imageController.uploadImg)

module.exports = router