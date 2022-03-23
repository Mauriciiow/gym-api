class UsuariosDAO{
    constructor(db){
        this.db = db
    }

    selecionaUsuarios = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM USUARIOS', (err, row)=>{
                if(err){
                    reject (err)
                } else {
                    resolve (row)
                }
            })
        })
    }

    selecionaUsuario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.get('SELECT * FROM USUARIOS WHERE id=?', id, (err, row)=>{
                if(err){
                    reject (err)
                } else {
                    resolve (row)
                }
            })
        })
    }

    adicionaUsuario = (usuario)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS (nome, idade, data_nascimento, cpf, telefone, email, senha, instrutor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email, 
            usuario.senha, usuario.instrutor, (err)=>{
                if(err){
                    reject (err)
                } else {
                    resolve ("Usuario adicionado")
                }
            })
        })
    }

    modificaUsuario = (usuario, id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET nome=?, idade=?, data_nascimento=?, cpf=?, telefone=?, email=?, senha=?, instrutor=? WHERE id=?', usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email,
            usuario.senha, usuario.instrutor, id, (err)=>{
                if(err){ 
                    reject (err)
                } else {
                    resolve (`Usuario atualizado`)
                }
            })
        })
    }

    apagaUsuario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM USUARIOS WHERE ID=?', id, (err)=>{
                if(err){ 
                    reject (err)
                } else {
                    resolve (`Usuario de id ${id} deletado`)
                }
            })
        })
    }

}

export default UsuariosDAO