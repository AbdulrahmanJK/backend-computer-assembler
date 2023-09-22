const jwt = require('jsonwebtoken');

module.exports.auth = async (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
      req.user = { id: decoded.id, role: decoded.role }; // Добавляем id и role в объект req.user
      next();
    } catch (e) {
      return res.status(403).json({
        message: e.toString(),
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'Admin') { // Проверяем наличие req.user и роль пользователя
    next();
  } else {
    res.status(403).json({ error: 'Доступ запрещен' });
  }
};
