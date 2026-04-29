import express from "express";
import { PORT } from "./config.js";
import bookRoutes from "./routes/books.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { sequelize } from "../db.js";
import "./models/Book.js";
import "./models/User.js";
const app = express();

try {
  app.use(express.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });
  app.listen(PORT);
  app.use(bookRoutes);
  app.use(authRoutes);

  await sequelize.sync();

  console.log(`Servidor escuchando en el puerto ${PORT}`);
} catch (error) {
  console.log(`Hubo un error la inicializacion`);
}
