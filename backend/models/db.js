const sqlite3 = require('sqlite3').verbose();

// Caminho para o arquivo do banco de dados SQLite
const DB_PATH = '/home/kesia/desafio_database.db';

// Inicialização do banco de dados
const db = new sqlite3.Database(DB_PATH, err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão bem-sucedida com o banco de dados SQLite');
    }
});

module.exports = db;
