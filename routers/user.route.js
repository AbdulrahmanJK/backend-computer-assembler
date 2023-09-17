
// const {registerValidator} = require("../validation/validation") //потом подключим (Папка готова)
const {Router} = require("express")
const {userController} = require("../controllers/user.controller")
const { postValidator } = require("../validator/validation");
const router = Router()

//тест
router.post('/signIn', postValidator,  userController.registerUser) //регистрация
router.post('/signUp', postValidator, userController.login) //вход в акк
router.patch('/signPatch', postValidator, userController.patchUser) //изменение
router.get('/signGet', userController.getMe) // показ акка


module.exports = router