const sqlite3 = require('sqlite3').verbose();

function connectDatabase() {
    const dbPath = '/home/kesia/desafio_database.db'; // Caminho para o arquivo desafio_database.db

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err.message);
        } else {
            console.log('Conexão bem-sucedida com o banco de dados SQLite');
        }
    });

    return db;
}

module.exports = connectDatabase;
