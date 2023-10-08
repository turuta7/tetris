const express = require("express");
const app = express();
const path = require("path");

// Установите путь к статическим файлам
app.use(express.static(path.join(__dirname, "public")));

// Определите маршрут для вашей главной страницы
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Слушайте на определенном порту
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
