CREATE TABLE cursos (
    id SERIAL PRIMARY KEY, --la llave primaria
    nombreCurso VARCHAR(255) UNIQUE NOT NULL,
    lenguaje TEXT NOT NULL,
    duracion VARCHAR(255),
    estrellas INT,
    dificultad TEXT,
    descripcion VARCHAR(500),
    contenido TEXT
);

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    cellphone INT,
    birthday TEXT,
    rol TEXT
);