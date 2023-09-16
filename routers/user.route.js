
// const {registerValidator} = require("../validation/validation") //потом подключим (Папка готова)
const {Router} = require("express")
const {userController} = require("../controller/user.controller")

const router = Router()

//тест
router.post('/signIn', userController.createUser) //регистрация
router.post('/signUp', userController.login) //вход в акк


module.exports = router