import UsuariosModel from "../models/Usuarios.js"

const usuariosController = (app, db)=>{
const usuariosoModel = new UsuariosModel(db)
    app.get('/usuarios', async (req, res)=>{
        
        try {
            const usuarios = await usuariosoModel.pegaUsuarios()
            res.status(200).json({"Usuarios": usuarios, "erro": false})
        } catch (error) {
            res.status(400).json({"mensagem": error.message, "erro": true})
        }
    })

    app.get('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id

        try {
            const usuario = await usuariosoModel.pegaUmUsuario(id)
            res.status(302).json({"Usuarios": usuario, "erro": false})
        } catch (error) {
            res.status(404).json({"mensagem": error.message, "erro": true})
            
        }
    })

    app.post('/usuarios', async (req, res)=>{
        const body = req.body   

        try {
          const usuarioInserido = await usuariosoModel.insereUsuario(body)
           res.status(201).json({"mensagem": usuarioInserido, "Usuario": body, "erro": false})
        } catch (error) {
            res.status(400).json({"mensagem": error.message,  "erro": true})
        }
      
    })

    app.put('/usuario/id/:id', async (req, res)=>{
        const body = req.body
        const id = req.params.id
       
        try {
            const usuarioAtualizado = await usuariosoModel.atualizaUsuario(body, id)
            res.status(200).json({"mensagem": usuarioAtualizado, "Usuario": body, "erro": false})
        } catch (error) {
            res.status(400).json({"mensagem": error.message, "erro": true})
        }
    })

    app.delete('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id

        try {
         const usuarioDeletado = await usuariosoModel.deletaUsuario(id)
          res.status(202).json({"mensagem": usuarioDeletado, "erro": false})
        } catch (error) {
            res.status(400).json({"mensagem": error.message, "erro": true})
            
        } 
    })
}

export default usuariosController
