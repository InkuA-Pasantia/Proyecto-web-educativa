import { pool } from "../../db.js";
import bcrypt from "bcrypt";

export const signin = (req, res) => res.send('ingresando');

export const signup = async (req, res) => {
    const { nombre, apellido, edad, username, email, pass, cellphone, rol } = req.body;
    //console.log(name, email, password);
    //res.send('Registrado');

    try {
        //const hashedPassword = await bcrypt.hash(pass, 10);
        //console.log(hashedPassword);

        const result = await pool.query("INSERT INTO usuarios (nombre, apellido, edad, username, email, pass, cellphone, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) Returning * ", [nombre, apellido, edad, username, email, pass, cellphone, rol]);
        console.log(result);
        return res.json(result.rows[0]);
        
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({mesage: "El correo ya esta registrado"});
        }
    }
};

export const signout = (req, res) => res.send('Cerrando sesion');

export const profile = (req, res) => res.send('Perfil del usuario');

