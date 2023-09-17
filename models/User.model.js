// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatarURL: {
    type: String,
    default:
      "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg",
  },
  username: {
    type: String,
    default: "anonymous",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
