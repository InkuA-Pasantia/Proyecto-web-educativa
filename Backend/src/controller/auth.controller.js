import { pool } from "../../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

export const signin = async (req, res) => {
  const { email, pass } = req.body;

  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({ message: "El correo no esta registrado." });
  }

  const validPassword = await bcrypt.compare(pass, result.rows[0].pass);

  if (!validPassword) {
    return res.status(400).json({ message: "La contraseña es incorrecta" });
  }

  const token = await createAccessToken({ id: result.rows[0].id });
  console.log(result);
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 1000,
  });
  return res.json(result.rows[0]);
};

export const signup = async (req, res, next) => {
  const {
    nombre,
    apellido,
    edad,
    username,
    email,
    pass,
    cellphone,
    birthday,
    rol,
  } = req.body;
  //console.log(name, email, password);
  //res.send('Registrado');

  try {
    //const hashedPassword = await bcrypt.hash(pass, 10);
    //console.log(hashedPassword);
    const hashedPassword = await bcrypt.hash(pass, 10); //entre 10 y 15 veces se repite el algoritmo
    md5(email);
    const gravatar = "https://gravatar.com/avatar/" + md5(email);
    //insertamos los datos del registro en la bd
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, apellido, edad, username, email, pass, cellphone, birthday, rol, gravatar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        nombre,
        apellido,
        edad,
        username,
        email,
        hashedPassword,
        cellphone,
        birthday,
        rol,
        gravatar,
      ]
    );
    const token = await createAccessToken({ id: result.rows[0].id }); //podemos guardar id, name, email siempre separando por coma

    //const result = await pool.query("INSERT INTO usuarios (nombre, apellido, edad, username, email, pass, cellphone, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) Returning * ", [nombre, apellido, edad, username, email, pass, cellphone, rol]);
    console.log(result);
    res.cookie("token", token, {
      httpOnly: true, //solo se puede abrir con http y no con js
      //secure: false, solo páginas seguras o https
      sameSite: "none", //si el back está en un dominio y el front en el otro, lo vé igual
      maxAge: 60 * 60 * 24 * 1000, //en milisegundos es un día
    });
    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ mesage: "El correo ya esta registrado" });
    }
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "Sesión cerrada." });
}; //Sonia

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
    req.userId,
  ]);
  return res.json(result.rows[0]);
}; //Gonzalo

export const guardar_datos = (req, res) => {
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
  // Insertar datos en la base de datos
  // pool.query('INSERT INTO usuarios (nombre, apellido, usuario, email, pass) VALUES ($1, $2, $3, $4, $5)', [nombre, apellido, usuario, email, pass], (error, results) => {
  //   if (error) {
  //     console.error('Error al insertar datos:', error);
  //     res.status(500).json({ error: 'Hubo un error al guardar los datos.' });
  //   } else {
  //     res.json({ success: true });
  //   }
  // });

  return res.json({ succes: true });
};
