/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
import { dirname } from'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "idade" INTEGER,
    "data_nascimento" TEXT,
    "cpf" INTEGER,
    "telefone" TEXT,
    "email" TEXT,
    "senha" TEXT,
    "instrutor" BOOLEAN
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (id, nome, idade, data_nascimento, cpf, telefone, email, senha, instrutor)
VALUES 
    (1, 'Mauricio Oliveira', '18', '22/02/2011', '999999999999', '(99) 9999-9999', 'mauricio@gmail.com', '12345678', 'false'),
    (2, 'Tony Stark', '52', '11/02/1970', '999999999999', '(99) 9999-9999', 'tony@gmail.com', '12345678', 'false'),
    (3, 'Tom Holland', '25', '04/04/2000', '999999999999', '(99) 9999-9999', 'tom@gmail.com', '12345678', 'true'),
    (4, 'Jacob', '24', '07/06/2005', '999999999999', '(99) 9999-9999', 'jacob@gmail.com', '12345678', 'false'),
    (5, 'Chris', '30', '05/01/1980', '999999999999', '(99) 9999-9999', 'chris@gmail.com', '12345678', 'true')
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}




db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
});