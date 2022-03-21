import UsuariosDAO from '../DAO/UsuariosDAO.js'
import UsuarioSchema from './schema/UsuariosSchema.js'

class Usuarios{
  constructor(db){
      this.dao = new UsuariosDAO(db)
  }

  pegaTodosUsuarios = async ()=>{
      try {
          return await this.dao.pegaTodosUsuarios()
      } catch (error) {
          throw error
      }
  }

  pegaUmUsuario = async (id)=>{
      try {
         await this._verificaId(id)
          return await this.dao.pegaUmUsuario(id)
      } catch (error) {
          throw error
      }
  }

  insereUsuario = async (user)=>{
      try {
          const novoUsuario = new UsuarioSchema(user.nome, user.idade, user.data_nascimento, user.cpf, user.telefone, user.email, 
            user.senha)
          return await this.dao.insereUsuario(novoUsuario)
      } catch (error) {
          throw error
      }
  }

  deletaUsuario = async (id)=>{
      try {
          await this._verificaId(id)
          return await this.dao.deletatUsuario(id)
      } catch (error) {
          throw error
      }
  }

  atualizaUsuario = async (id, usuario)=>{
      try {
          await this._verificaId(id)
          const usuarioAtualizado = new UsuarioSchema(usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email, 
            usuario.senha)
          return await this.dao.atualizaUsuario(usuarioAtualizado, id)
      } catch (error) {
          throw error
      }
  }

  _verificaId = async (id)=>{
    const usuario = await this.dao.pegaUmUsuario(id)
    if (usuario === undefined) { 
        throw new Error(`Usuário de id ${id} nao existe`) 
    }
    return usuario
}
}

export default Usuarios