import express from "express";
import cursosRoutes from "./src/router/cursos.routes.js";
import authRoutes from "./src/router/auth.routes.js";

const app = express();

//app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ message: "Hola mundo" }));

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
