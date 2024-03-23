const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Rota para obter todos os clientes
router.get('/', (req, res) => {
    const query = 'SELECT * FROM clientes';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Erro ao consultar os clientes:', err.message);
            res.status(500).json({ error: 'Erro ao consultar os clientes' });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
