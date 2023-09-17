const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports.userController = {
  // Регистрация пользователя
  registerUser: async (req, res) => {
    const { email, login, password, avatarURL } = req.body;
    const candidate = await User.findOne({ email });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    if (candidate) {
      return res.status(401).json({ error: "Пользователь уже существует" });
    }

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    const user = await User.create({
      email: email,
      login: login,
      password: hash,
      avatarURL: avatarURL,
    });

    res.json(user);
  },
  // Вход в учетную запись
  login: async (req, res) => {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email: email });
    if (!candidate) {
      return res.status(401).json({ error: "Неверный Логин или пароль" });
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json({ error: "Неверный Логин или пароль" });
    }
    const payload = {
      id: candidate._id,
      email: candidate.email,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "72h",
    });
    res.json(token);
  },
  getMe: async (req, res) => {
    try {
      // В req.user содержится информация о текущем пользователе
      // const currentUser = req.user;
      res.json({
        success: true,
        user: req.user, // Возвращаем информацию о пользователе
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: "Произошла ошибка" });
    }
  },
};
