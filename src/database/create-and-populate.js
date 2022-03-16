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
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "IDADE" varchar(64),
    "DATA_NASCIMENTO" varchar(64),
    "CPF" varchar(64),
    "TELEFONE" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, NOME, IDADE, DATA_NASCIMENTO, CPF, TELEFONE, EMAIL, SENHA)
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