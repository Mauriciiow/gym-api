import UsuariosDAO from '../DAO/UsuariosDAO.js'
import UsuariosSchema from './schema/UsuariosSchema.js'

class UsuariosModel{
  constructor(db){
    this.dao = new UsuariosDAO(db)
  }

  pegaUsuarios = async ()=>{
      try {
        return await this.dao.selecionaUsuarios()
      } catch (error) {
        throw error
      }
  }

  pegaUmUsuario = async (id)=>{
    try {
      await this._verificaId(id)
      return await this.dao.selecionaUsuario(id)
    } catch (error) {
      throw error
    }
  }

  insereUsuario = async (usuario)=>{
    try {
      const usuarioNovo = new UsuariosSchema(usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email, usuario.senha, 
        usuario.treino_id, usuario.avaliacao_id, usuario.agendamentos_id, usuario.servicos_id)
      return await this.dao.adicionaUsuario(usuarioNovo)
    } catch (error) {
      throw error
    }
  }

  atualizaUsuario = async (usuario, id)=>{
    try {
      await this._verificaId(id)
      const usuarioAtualizado = new UsuariosSchema(usuario.nome, usuario.idade, usuario.data_nascimento, usuario.cpf, usuario.telefone, usuario.email, usuario.senha,
        usuario.treino_id, usuario.avaliacao_id, usuario.agendamentos_id, usuario.servicos_id)
      return await this.dao.atualizaUsuario(usuarioAtualizado, id)
    } catch (error) {
      throw error
    }
  }

  deletaUsuario = async (id)=>{
    try {
       await this._verificaId(id)
       return await this.dao.deletaUsuario(id)
    } catch (error) {
        throw error
    }
  }

  _verificaId = async (id)=>{
    const verifica = await this.dao.selecionaUsuario(id)
    if (verifica == undefined) {
     throw new Error(`Usuário de id ${id} não existe`)
    }
    
    return verifica
  }
} 

export default UsuariosModel