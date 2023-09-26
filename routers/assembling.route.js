const {Router} = require("express")
const {assemblingControllers} = require("../controllers/assembling.controller")
const  {auth}  = require('../middlewares/checkAuth.js')

const router = Router()


router.post("/assembling", assemblingControllers.createAssembling)
router.get("/assembling",  assemblingControllers.getAssembling)
router.get("/assembling/:id", assemblingControllers.getOneAssembling)
router.delete("/assembling/:id", assemblingControllers.deleteAssembling)
router.patch("/assembling/:id", assemblingControllers.patchAssembling)

module.exports = router