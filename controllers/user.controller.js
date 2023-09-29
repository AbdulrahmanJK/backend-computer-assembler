const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports.userController = {
  // Регистрация пользователя
  registerUser: async (req, res) => {
    const { email, username, password, avatarURL, role } = req.body;
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
      username: username,
      password: hash,
      avatarURL: avatarURL,
      role: role
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
        const userId = req.user.id;
        const currentUser = await User.findById(userId);
  
        if (!currentUser) {
          return res
            .status(404)
            .json({ success: false, error: "Пользователь не найден" });
        }
        
        // Добавляем email и username в объект с информацией о пользователе
        const userData = {
          _id: currentUser._id,
          username: currentUser.username,
          email: currentUser.email,
          avatarURL: currentUser.avatarURL,
          role: currentUser.role
          // Другие поля пользователя, если они есть
        };
  
        res.json({ success: true, user: userData });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({
            success: false,
            error: "Произошла ошибка при получении информации о пользователе",
          });
      }
  },
  patchUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { username, avatarURL } = req.body;
      const findUser = await User.findById(userId);
      if (!findUser) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }
  
      if (username) {
        findUser.username = username;
      }
      if (avatarURL) {
        findUser.avatarURL = avatarURL;
      }
  
      await findUser.save();
      res.json({ success: true, user: findUser }); // Заменено existingUser на findUser
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Произошла ошибка при обновлении данных пользователя",
      });
    }
  },  
  }
