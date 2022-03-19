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
            this.db.run('INSERT INTO USUARIOS (nome, idade, data_nascimento, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)', user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email, 
            user.senha, (err)=>{
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
            this.db.run('UPDATE USUARIOS SET NOME=?, IDADE=?, DATA_NASCIMENTO=?, CPF=?, TELEFONE=?, EMAIL=?, SENHA=? WHERE ID=?', user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email,
            user.senha, id, (err)=>{
                if(err){ 
                    reject ({"erro": err.message})
                } else {
                    resolve ({"msg": `Usuario ${user.nome} atualizado`})
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
                    resolve ({"msg": `Usuario de id ${id} deletado`})
                }
            })
        })
    }

    _verificaId = async (id)=>{
        const usuario = await this.selectUsuario(id)
        if (usuario.Usuario === undefined ) { 
            throw new Error(`Usuario de ${id} nao existe`)
            
        }
        return usuario
    }


}

export default UsuariosDAO