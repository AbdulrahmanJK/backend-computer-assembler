const { body } = require("express-validator");

module.exports.registerValidator = [
  body("email", "неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 4 символов").isLength({
    min: 4,
  }),
  body("avatarURL", "Ссылка не поддерживается").optional().isURL(),
  body("username", "Ник должен быть минимум 4 символов").isLength({
    min: 4,
  }),
  body(
    "username",
    "имя пользователя может содержать только буквы и цифры"
  ).matches(/^[a-zA-Z0-9]*$/),
];
