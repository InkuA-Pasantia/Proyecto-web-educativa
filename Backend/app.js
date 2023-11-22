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

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Configurar encabezados CORS para permitir solicitudes desde cualquier origen
// Configurar encabezados CORS para permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Permitir los métodos que necesites, incluyendo OPTIONS
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Permitir ciertos encabezados
  next();
});

// Manejar la solicitud OPTIONS
app.options("/api/guardar_datos", (req, res) => {
  res.status(200).end(); // Respondemos exitosamente a la solicitud OPTIONS
});

// Ruta específica para manejar la solicitud POST en /api/guardar_datos
app.post("/api/guardar_datos", (req, res) => {
  const { nombre, apellido, usuario, email, pass } = req.body;

  console.log(
    "Datos traídos del front: {\n nombre: " +
      nombre +
      "\n apellido: " +
      apellido +
      "\n usuario: " +
      usuario +
      "\n email: " +
      email +
      "\n contraseña: " +
      pass +
      "\n }"
  );
  // Redirigimos al usuario a la página de inicio
  //res.redirect("/"); //en este caso, vuelve al principio
  res.redirect("http://127.0.0.1:5501/OpenCodeAcademy/Templates/index.html");

  // Acá van las querys para guardar los datos en la base de datos


  //se comenta esta linea porque ya se hace na redirección y se traen los datos
  //res.status(200).json({ mensaje: 'Los datos fueron recibidos del formulario exitosamente' });
});

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
