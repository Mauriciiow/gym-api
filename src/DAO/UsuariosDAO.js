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

    selectUsuario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.get('SELECT * FROM USUARIOS WHERE id=?', id, (err, row)=>{
                if(err){
                    reject ({"erro": err.message})
                } else {
                    resolve ({"Usuario": row})
                }
            })
        })
    }

    insertUsuario = (user)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS VALUES (?, ?, ?, ?, ?, ?, ?, ?)', user.id, user.NOME, user.IDADE, user.DATA_NASCIMENTO, user.CPF, user.TELEFONE, user.EMAIL, 
            user.SENHA, (err)=>{
                if(err){
                    reject ({"erro": err.message})
                } else {
                    resolve ({"msg": "Usuario adicionado", "Usuario": user})
                }
            })
        })
    }

    updatetUsuario = (user, id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE USUARIOS SET NOME=?, IDADE=?, DATA_NASCIMENTO=?, CPF=?, TELEFONE=?, EMAIL=?, SENHA=? WHERE ID=?', user.NOME, user.IDADE, user.DATA_NASCIMENTO, user.CPF, user.TELEFONE, user.EMAIL, 
            user.SENHA, id, (err)=>{
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
            this.db.run('DELETE FROM USUARIOS WHERE ID=?', id, (err)=>{
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