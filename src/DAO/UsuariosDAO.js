class UsuariosDAO{
    constructor(db){
        this.db = db
    }

    selectUsuarios = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM USUARIOS', (err, row)=>{
                if(err){
                    reject ({"erro": err.message})
                } else {
                    resolve ({"Usuarios": row, "erro": false})
                }
            })
        })
    }

    selectUsuario = (id, user)=>{
        return new Promise((resolve, reject)=>{
            this.db.get('SELECT * FROM USUARIOS WHERE id=?', id, (err)=>{
                if(err){
                    reject ({"erro": err.message})
                } else {
                    resolve ({"Usuario": user})
                }
            })
        })
    }

    insertUsuario = (user)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS VALUES (?, ?, ?, ?, ?, ?, ?, ?)', user.id, user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email, user.senha, (err)=>{
                if(err){
                    reject ({"erro": err.message})
                } else {
                    resolve ({"Usuario": user})
                }
            })
        })
    }

    updatetUsuario = (user, id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET ? WHERE ID=?', user, id, (err)=>{
                if(err){ 
                    reject ({"erro": err.message})
                } else {
                    resolve ({"msg": "Usuario atualizado"})
                }
            })
        })
    }

    deletetUsuario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET ? WHERE ID=?', user, id, (err)=>{
                if(err){ 
                    reject ({"erro": err.message})
                } else {
                    resolve ({"msg": "Usuario deletado"})
                }
            })
        })
    }


}

export default UsuariosDAO