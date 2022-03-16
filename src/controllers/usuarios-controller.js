import UsuariosDAO from "../DAO/UsuariosDAO.js"

const usuariosController = (app, db)=>{
const usuarioDAO = new UsuariosDAO(db)
    app.get('/usuarios', (req, res)=>{
        usuarioDAO.selectUsuarios()
        .then((resposta)=>res.json(resposta))
        .catch((erro)=>res.json(erro))
    })

    app.get('/usuarios/id/:id', (req, res)=>{
        const id = req.params.id

        usuarioDAO.selectUsuario(id)
        .then((resposta)=>res.json(resposta))
        .catch((erro)=>res.json(erro))
    })

    app.post('/usuarios', (req, res)=>{
        const usuario = req.body

        usuarioDAO.insertUsuario(usuario)
        .then((resposta)=>res.json(resposta))
        .catch((erro)=>res.json(erro))
    })

    app.put('/usuario/id/:id', (req, res)=>{
        const id = req.params.id

        usuarioDAO.updatetUsuario(id)
        .then((resposta)=>res.json(resposta))
        .catch((erro)=>res.json(erro))
        
    })

    app.delete('/usuario/id/:id', (req, res)=>{
        const id = req.params.id

        usuarioDAO.deletetUsuario(id)
        .then((resposta)=>res.json(resposta))
        .catch((erro)=>res.json(erro))
    })
}

export default usuariosController