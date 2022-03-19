import request from 'supertest'
import app from '../app.js'


describe('GET /usuarios', ()=>{
  test('Se o status da rota usuarios é 200', async ()=>{
      const response = await request(app).get('/usuarios')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /usuario/:id', ()=>{
  test('Se o status de um ususario inexistente é 404', async ()=>{
      const response = await request(app).get('/usuarios/usuario/2')
    expect(response.statusCode).toBe(404)
  })
})

describe('POST /usuarios', ()=>{
  test('senha invalida', async ()=>{
      const response = await request(app).post('/usuarios')
      .send({
        "nome": "teste",
        "idade": 23,
        "data_nascimento": "01/01/1998",
        "cpf": 99999999999,
        "telefone": "(99) 9999-9999",
        "email": "teste@mail.com",
        "senha": "234"
      })
    console.log(response.body)
    expect(response.body.erro).toBeTruthy()
  })

  test('email invalido', async ()=>{
    const response = await request(app).post('/usuarios')
    .send({
      "nome": "teste",
      "idade": 23,
      "data_nascimento": "01/01/1998",
      "cpf": 99999999999,
      "telefone": "(99) 9999-9999",
      "email": "testemail.com",
      "senha": "12345678"
    })
  console.log(response.body)
  expect(response.body.erro).toBeTruthy()
})

test('cpf invalido', async ()=>{
  const response = await request(app).post('/usuarios')
  .send({
    "nome": "teste",
    "idade": 23,
    "data_nascimento": "01/01/1998",
    "cpf": 99,
    "telefone": "(99) 9999-9999",
    "email": "teste@mail.com",
    "senha": "12345678"
  })
console.log(response.body)
expect(response.body.erro).toBeTruthy()
})


test('nome nullo', async ()=>{
  const response = await request(app).post('/usuarios')
  .send({
    "nome": null,
    "idade": 23,
    "data_nascimento": "01/01/1998",
    "cpf": 99,
    "telefone": "(99) 9999-9999",
    "email": "teste@mail.com",
    "senha": "12345678"
  })
console.log(response.body)
expect(response.body.erro).toBeTruthy()
})

})

