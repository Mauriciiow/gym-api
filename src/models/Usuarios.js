class UsuariosModel{
    constructor(nome, idade, data_nascimento, cpf, telefone, email, senha){
        this.nome = this._validaNome(nome)
        this.idade = idade
        this.data_nascimento = data_nascimento
        this.cpf = this._validaCpf(cpf)
        this.telefone = this._validaTel(telefone)
        this.email = this._validaEmail(email)
        this.senha = this._validaSenha(senha)
    }

  
    _validaSenha = (senha)=>{
        if (senha == null || senha.length >= 8) {
            return senha
        } 
        throw new Error('A senha precisa de pelo menos 8 digitos')
    }

    _validaEmail = (email)=>{
        let re = /\S+@\S+\.\S+/

        if (email != null || re.test(email)) {
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
        if (cpf == null || cpf.length < 11) {
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



}

export default UsuariosModel