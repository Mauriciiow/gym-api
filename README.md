# 🏋🏽**Gym_Api**

Projeto Módulo 4 Resilia - API REST para uma academia utilizando a entidade Usuários

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com).

# Objetivo
Esse projeto tem como objetivo criar uma API RESTful de uma academia, onde será possível aplicar as operações CRUD na entidade Usuários.

# Pré-Requisitos

- Node.js v.16.14.0
- NPM v.8.3.1

# Pacotes utilizados

- [Express](https://expressjs.com) v.4.17.3
- [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
- [SQLite](https://www.npmjs.com/package/sqlite3) v.5.0.0
- [Jest](https://jestjs.io/docs/getting-started) v.27.5.1
- [Supertest](https://www.npmjs.com/package/supertest) v.6.2.2

# Instalação da Aplicação
Abra o terminal/Powershell e rode os comandos abaixo:

```bash
# Clonar o repositório
git clone https://github.com/Mauriciiow/gym-api.git
```

```bash
# Entrar no diretório
cd gym-api
```

```bash
# Instalar as dependências
npm install
```

```bash
# Iniciar o projeto
npm start
```
---

# Rotas implementadas

Usuários
- GET /usuarios

Schema da resposta

```json
{
  "Usuarios": [
    {
     "id": <String>,
     "nome": <String>,
     "idade": <String>,
     "data_nascimento": <String>,
     "cpf": <String>,
     "telefone": <String>,
     "email": <String>,
     "senha": <String>
    }
  ],
   "erro": <Boleano>
}
```


- GET /usuario/id/{id}

Schema da resposta

```json
{
  "Usuario": {
     "id": <String>,
     "nome": <String>,
     "idade": <String>,
     "data_nascimento": <String>,
     "cpf": <String>,
     "telefone": <String>,
     "email": <String>,
     "senha": <String>
   },
    "erro": <Boleano>
}
```

- POST /usuarios

Schema da requisição

```json
{
   "nome": <String>,
   "idade": <String>,
   "data_nascimento": <String>,
   "cpf": <String>,
   "telefone": <String>,
   "email": <String>,
   "senha": <String>
}
```

Schema da resposta

```json
{
  "mensagem": <String>,
  "Usuario": {
     "nome": <String>,
     "idade": <String>,
     "data_nascimento": <String>,
     "cpf": <String>,
     "telefone": <String>,
     "email": <String>,
     "senha": <String>
   },
    "erro": <Boleano>
}
```

- PUT /usuario/id/{id}

Schema da requisição

```json
{
   "nome": <String>,
   "idade": <String>,
   "data_nascimento": <String>,
   "cpf": <String>,
   "telefone": <String>,
   "email": <String>,
   "senha": <String>
}
```

Schema da resposta

```json
{
  "mensagem": <String>,
  "Usuario": {
     "nome": <String>,
     "idade": <String>,
     "data_nascimento": <String>,
     "cpf": <String>,
     "telefone": <String>,
     "email": <String>,
     "senha": <String>
   },
    "erro": <Boleano>
}
```

- DELETE /usuario/id/{id}

Schema da resposta

```json
{
   "mensagem": <String>,
   "erro": <Boleano>
}
```
