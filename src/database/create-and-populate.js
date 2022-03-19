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
    "senha" TEXT
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (id, nome, idade, data_nascimento, cpf, telefone, email, senha)
VALUES 
    (1, 'Mauricio Oliveira', '18', '27/03/2003', '00000000000', '(99) 9999-9999', 'mauricio@gmail.com', '12345678')
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