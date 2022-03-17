class UsuariosModel{
    constructor(nome, idade, data_nascimento, cpf, telefone, email, senha){
        this.nome = nome
        this.idade = idade
        this.data_nascimento = data_nascimento
        this.cpf = cpf
        this.telefone = telefone
        this.email = this._validaEmail(email)
        this.senha = this._validaSenha(senha)
    }

    _validaSenha = (senha)=>{
        if (senha.length >= 8) {
            return senha
        } 
        throw new Error('A senha precisa de pelo menos 8 digitos')
    }

    _validaEmail = (email)=>{
        let re = /\S+@\S+\.\S+/

        if (re.test(email)) {
            return email
        }
        throw new Error('Digite um email valido')
    }

}

export default UsuariosModel