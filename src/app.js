import express from "express"
import usuariosController from "./controllers/usuarios-controller.js"
import cors from 'cors'
import bd from "./database/sqlite-db.js"

const app = express()

app.use(express.json());
app.use(cors())

usuariosController(app, bd)


export default app