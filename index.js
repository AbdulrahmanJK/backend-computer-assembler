require("dotenv").config();
const path = require('path');

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use('/static',express.static(path.join(__dirname, '/static')));

// app.use("/static", express.static(__dirname + "/static")); // Используйте абсолютный путь к папке uploads
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use('/uploads', express.static('uploads'));
app.use(require('./routers/user.route'))
app.use(require("./routers/accessories.route"))
app.use(require("./routers/category.route"))
app.use(require("./routers/assembling.route"))
app.use(require("./routers/img.route"))


mongoose
  .connect(process.env.MONGODB_SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Сервер успешно подключен к базе данных");
    app.listen(port, () => {
      console.log(`Подключение успешно. Сервер слушает порт ${port}`);
    });
  })
  .catch((error) => {
    console.error("Произошла ошибка подключения к базе данных:", error);
  });
