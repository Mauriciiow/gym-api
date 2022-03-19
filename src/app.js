import express from "express";
import usuariosController from "./controllers/usuarios-controller.js";
import bd from "./database/sqlite-db.js"

const app = express()

app.use(express.json());

usuariosController(app, bd)


export default app