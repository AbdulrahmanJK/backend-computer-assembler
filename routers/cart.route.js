const {Router} = require("express")
const {assemblingControllers, cartControllers} = require("../controllers/cart.controllers")
const  {auth}  = require('../middlewares/checkAuth.js')

const router = Router()


router.post("/cart", cartControllers.createCart)
router.get("/cart",  cartControllers.getCart)
router.delete("/cart/:id", cartControllers.deleteCart)
router.delete("/cart/", cartControllers.deleteAll)

module.exports = router