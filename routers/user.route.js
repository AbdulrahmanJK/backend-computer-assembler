
// const {registerValidator} = require("../validation/validation") //потом подключим (Папка готова)
const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const  {auth}  = require('../middlewares/checkAuth.js')
const {registerValidator } = require('../validation/validation')
const router = Router();

router.post("/auth",  userController.registerUser); // Роут регистрации пользователя
router.post("/login", registerValidator,   userController.login); // Вход в учетную запись
router.get("/getMe", auth,   userController.getMe)
router.patch("/patchUser", auth, userController.patchUser)
module.exports = router;