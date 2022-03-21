class UsuariosDAO{
    constructor(db){
        this.db = db
    }

    pegaTodosUsuarios = ()=>{
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

    pegaUmUsuario = (id)=>{
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

    insereUsuario = (usuario)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS (nome, idade, data_nascimento, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)', usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email, 
            usuario.senha, (err)=>{
                if(err){
                    reject (err)
                } else {
                    resolve (`Usuário ${usuario.nome} inserido com sucesso`)
                }
            })
        })
    }

    atualizaUsuario = (usuario, id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET nome=?, idade=?, data_nascimento=?, cpf=?, telefone=?, email=?, senha=? WHERE id=?', usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email,
            usuario.senha, id, (err)=>{
                if(err){ 
                    reject (err)
                } else {
                    resolve (`Usuário de id ${id} atualizado com sucesso com sucesso`)
                }
            })
        })
    }

    deletatUsuario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM USUARIOS WHERE ID=?', id, (err)=>{
                if(err){ 
                    reject (err)
                } else {
                    resolve (`Usário de id ${id} deletado`)
                }
            })
        })
    }

}

export default UsuariosDAO