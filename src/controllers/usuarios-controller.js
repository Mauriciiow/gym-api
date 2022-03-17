import UsuariosDAO from "../DAO/UsuariosDAO.js"
import UsuariosModel from "../models/Usuarios.js"

const usuariosController = (app, db)=>{
const usuarioDAO = new UsuariosDAO(db)
    app.get('/usuarios', async (req, res)=>{
        try {
            const usuarios = await usuarioDAO.selectUsuarios()
            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400).json({"mensagem": error.message})
        }
    })

    app.get('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id

        try {
            const usuario = await usuarioDAO.selectUsuario(id)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).json({"mensagem": error.message})
            
        }
        
        
    })

    app.post('/usuarios', (req, res)=>{
            const body = req.body
            
        try {
             const usuario = new UsuariosModel(body.nome, body.idade, body.data_nascimento, body.cpf, body.telefone, body.email, body.senha)
    
            usuarioDAO.insertUsuario(usuario)
            .then((resposta)=>res.status(201).json(resposta))
            .catch((erro)=>res.status(400).json(erro))
         
            
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
            })
        }
      
    })

    app.put('/usuario/id/:id', (req, res)=>{
        const body = req.body
        const id = req.params.id
       
        try {
            const usuario = new UsuariosModel(body.nome, body.idade, body.data_nascimento, body.cpf, body.telefone, body.email, body.senha)
            usuarioDAO.updatetUsuario(usuario, id)
            .then((resposta)=>res.status(202).json(resposta))
            .catch((erro)=>res.status(400).json(erro))
        } catch (error) {
            res.status(400).json({
                "msg": error.message
            })
        }

       
        
    })

    app.delete('/usuario/id/:id', (req, res)=>{
        const id = req.params.id

        usuarioDAO.deletetUsuario(id)
        .then((resposta)=>res.status(200).json(resposta))
        .catch((erro)=>res.status(400).json(erro))
    })
}

export default usuariosController