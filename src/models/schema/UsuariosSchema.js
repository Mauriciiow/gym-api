class UsuariosSchema{
    constructor(nome, idade, data_nascimento, cpf, telefone, email, senha){
        this.nome = this._validaNome(nome)
        this.idade = this._validaIdade(idade)
        this.data_nascimento = this._validaDataNull(data_nascimento)
        this.cpf = this._validaCpf(cpf)
        this.telefone = this._validaTel(telefone)
        this.email = this._validaEmail(email)
        this.senha = this._validaSenha(senha)
    }

  
    _validaSenha = (senha)=>{
        if (senha == null || senha.length < 8) {
            throw new Error('Digite uma senha com pelo menos 8 dígitos')
           
        } 
        return senha
    }

    _validaEmail = (email)=>{
        let re = /\S+@\S+\.\S+/

        if (email != null && re.test(email)) {
            return email
        }
        throw new Error('Digite um email válido')
    }

    _validaNome= (nome)=>{
       if (nome == null || nome.length == 0) {
         throw new Error('Digite um nome válido')
       }
       return nome
    }

    _validaCpf= (cpf)=>{
        if (cpf == null || String(cpf).length < 11) {
            
          throw new Error('Digite um cpf válido')
        }
        return cpf
     }

     _validaTel= (tel)=>{
        if (tel == null || String(tel).length < 11) {
          throw new Error('Digite um telefone valido')
        }
        return tel
     }

     _validaIdade= (idade)=>{
        if (idade == null || String(idade).length == 0) {
          throw new Error('Digite uma idade válida')
        }
        return idade
     }

     _validaDataNull= (data)=>{
        if (data == null || String(data).length == 0) {
          throw new Error('Digite uma data válida')
        }
        return data
     }

}

export default UsuariosSchema