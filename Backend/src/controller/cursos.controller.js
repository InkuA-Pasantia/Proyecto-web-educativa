import { pool } from '../../db.js';

export const listarCursos = async (req, res) => {
    const resultado = await pool.query('SELECT * FROM cursos WHERE usuario_id = $1', [req.usuarioId]);
    //console.log(userId);
    return res.json(resultado.rows);
};

export const listarCurso = async (req, res) => {
    const resultado = await pool.query('SELECT * FROM cursos WHERE id = $1', [req.params.id]);
    if (resultado.rowCount === 0) {
        return res.status(404).json({
            message: 'La entrada no existe'
        });
        
    }
    return res.json(resultado.rows[0]);
};

export const crearCurso = async (req, res, next) => {
    const { nombreCurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido } = req.body;
    console.log(nombreCurso);

    try {
        const result = await pool.query('INSERT INTO cursos (nombreCurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido, usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [nombreCurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido, usuario_id]);
        res.json(result.rows[0]);
        console.log(result.rows[0]);
        //console.log(result);
        //res.send("creando tarea");
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                message: 'Ya existe un curso con ese nombre'
            });
        }
        console.log(error);
        next(error);
    }
};

export const actualizarCurso = async (req, res) => {
    const { nombreCurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido } = req.body;
    const id = req.params.id;
    const result = await pool.query('UPDATE cursos SET nombreCurso = $1, lenguaje = $2, duracion = $3, estrellas = $4, dificultad = $5, descripcion = $6, contenido = $7 WHERE id = $8 RETURNING *', [nombreCurso, lenguaje, duracion, estrellas, dificultad, descripcion, contenido, id]);

    if (result.rowCount === 0) {
        return res.status(404).json({
            message: 'No existe un curso con ese id.'
        });

    }
    return res.json(result.rows[0]);
};


export const eliminarCurso = async (req, res) => {
    const resultado = await pool.query('DELETE FROM cursos WHERE id = $1', [req.params.id]);

    if (resultado.rowCount === 0) {
        return res.status(404).json({
            message: 'No existe un curso con ese id.'
        });

    }
    return res.sendStatus(204);
};