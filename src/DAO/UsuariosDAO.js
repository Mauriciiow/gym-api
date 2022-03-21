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

    adicionaUsuario = (user)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS (nome, idade, data_nascimento, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)', user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email, 
            user.senha, (err)=>{
                if(err){
                    reject (err)
                } else {
                    resolve ("Usuario adicionado")
                }
            })
        })
    }

    atualizaUsuario = (user, id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET nome=?, idade=?, data_nascimento=?, cpf=?, telefone=?, email=?, senha=? WHERE id=?', user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email,
            user.senha, id, (err)=>{
                if(err){ 
                    reject (err)
                } else {
                    resolve (`Usuario atualizado`)
                }
            })
        })
    }

    deletaUsuario = (id)=>{
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