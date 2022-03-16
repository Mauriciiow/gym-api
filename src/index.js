import express from "express";
import usuariosController from "./controllers/usuarios-controller.js";
import bd from "./database/sqlite-db.js"

const app = express()
const port = 3000

app.use(express.json());

usuariosController(app, bd)

app.listen(port, ()=>{
    console.log(`Server ligado na porta ${port} http://localhost:${port}/`);
 
})