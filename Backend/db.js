// En este archivo vamos a generar la conección a nuestra base de datos.
import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "OCA",
});

pool.on("connect", () => {
    console.log("conectado a la base de datos");
});