import express from "express";
import morgan from "morgan";
import cursosRoutes from "./src/router/cursos.routes.js";
import authRoutes from "./src/router/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan("dev")); //proporciona mensajes mas cortos y limpios
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ message: "Bienvenidos a Proyecto Oca" }));

app.use("/api", cursosRoutes);
app.use("/api", authRoutes);

//Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
