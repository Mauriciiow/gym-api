class UsuariosModel{
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
            throw new Error('Digite uma sennha com pelo menos pelo menos 8 digitos')
           
        } 
        return senha
    }

    _validaEmail = (email)=>{
        let re = /\S+@\S+\.\S+/

        if (email != null && re.test(email)) {
            return email
        }
        throw new Error('Digite um email valido')
    }

    _validaNome= (nome)=>{
       if (nome == null || nome.length == 0) {
         throw new Error('Digite um nome valido')
       }
       return nome
    }

    _validaCpf= (cpf)=>{
        if (cpf == null || String(cpf).length < 11) {
            
          throw new Error('Digite um cpf valido')
        }
        return cpf
     }

     _validaTel= (tel)=>{
        if (tel == null || tel.length < 11) {
          throw new Error('Digite um telefone valido')
        }
        return tel
     }

     _validaIdade= (idade)=>{
        if (idade == null) {
          throw new Error('Digite uma idade valida')
        }
        return idade
     }

     _validaDataNull= (data)=>{
        if (data == null) {
          throw new Error('Digite uma data valida')
        }
        return data
     }




}

export default UsuariosModel