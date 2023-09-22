//Это минимальный сервер, установленные зависимости читайте в package.json
require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express()
const port = 4000
app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(cors())
app.use(require('./routers/user.route'))
app.use(require("./routers/accessories.route"))
app.use(require("./routers/category.route"))
app.use(require("./routers/assembling.route"))
app.use(require("./routers/img.route"))



mongoose.connect(process.env.MONGODB_SERVER)
.then(() => console.log('Сервер успешно подключен'))
.catch((error) => console.log('Произошла ошибка подключения к серверу'))

app.listen(port, () => {
    console.log('Подключение успешно');
})


