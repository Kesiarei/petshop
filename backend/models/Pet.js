const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Rota para obter todos os pets
router.get('/', (req, res) => {
    const query = 'SELECT * FROM pets';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Erro ao consultar os pets:', err.message);
            res.status(500).json({ error: 'Erro ao consultar os pets' });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
