import UsuariosDAO from "../DAO/UsuariosDAO.js"
import UsuariosModel from "../models/Usuarios.js"

const usuariosController = (app, db)=>{
const usuarioDAO = new UsuariosDAO(db)
    app.get('/usuarios', async (req, res)=>{
        
        try {
            const usuarios = await usuarioDAO.selectUsuarios()
            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400).json({"mensagem": error.message,
            "erro": true})
        }
    })

    app.get('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id

        try {
            await usuarioDAO._verificaId(id)
            const usuario = await usuarioDAO.selectUsuario(id)
            res.status(302).json(usuario)
        } catch (error) {
            res.status(404).json({"mensagem": error.message,
            "erro": true})
            
        }
    })

    app.post('/usuarios', async (req, res)=>{
        const body = req.body   

        try {
          const usuario = new UsuariosModel(body.nome, body.idade, body.data_nascimento, body.cpf, body.telefone, body.email, body.senha)
          const usuarioInserido = await usuarioDAO.insertUsuario(usuario)
           res.status(201).json(usuarioInserido)
        } catch (error) {
            res.status(400).json({"mensagem": error.message,
            "erro": true})
        }
      
    })

    app.put('/usuario/id/:id', async (req, res)=>{
        const body = req.body
        const id = req.params.id
       
        try {
            await usuarioDAO._verificaId(id)
            const usuario = new UsuariosModel(body.nome, body.idade, body.data_nascimento, body.cpf, body.telefone, body.email, body.senha)
            const usuarioAtualizado = await usuarioDAO.updatetUsuario(usuario, id)
            res.status(200).json(usuarioAtualizado)
        } catch (error) {
            res.status(400).json({"mensagem": error.message,
            "erro": true})
        }
    })

    app.delete('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id

        try {
         await usuarioDAO._verificaId(id)
         const usuarioDeletado = await usuarioDAO.deletetUsuario(id)
          res.status(202).json(usuarioDeletado)
        } catch (error) {
            res.status(400).json({"mensagem": error.message,
            "erro": true})
            
        } 
    })
}

export default usuariosController
