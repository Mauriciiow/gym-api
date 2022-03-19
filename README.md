# 🏋🏽**Gym_Api**

Projeto Módulo 4 Resilia - API REST para uma academia com a entidade Usuários

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

Clonando o repositório:

```bash
# Clonar o repositório
git clone https://github.com/Mauriciiow/gym-api.git
```

```bash
# Entrar no diretório
cd gym-API
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
			"ID": <String>,
			"NOME": <String>,
			"IDADE": <String>,
			"DATA_NASCIMENTO": <String>,
			"CPF": <String>,
			"TELEFONE": <String>,
			"EMAIL": <String>,
			"SENHA": <String>
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
		"ID": <String>,
		"NOME": <String>,
		"IDADE": 23,
		"DATA_NASCIMENTO": <String>,
		"CPF": <String>,
		"TELEFONE": <String>,
		"EMAIL": <String>,
		"SENHA": <String>
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