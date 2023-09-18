const {Router} = require("express")
const {accessoriesControllers} = require("../controllers/accessories.controllers")
const router = Router()


router.post("/accessories", accessoriesControllers.createAccessories)
router.get("/accessories", accessoriesControllers.getAccessories)
router.get("/accessories/:id", accessoriesControllers.getOneAccessory)
router.delete("/accessories/:id", accessoriesControllers.deleteAccessories)
router.patch("/accessories/:id", accessoriesControllers.patchAccessories)

module.exports = router