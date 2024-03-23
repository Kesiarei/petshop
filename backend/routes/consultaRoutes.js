const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

// Rota para listar todas as consultas
router.get('/', consultaController.listConsultas);

// Rota para agendar uma nova consulta
router.post('/', consultaController.agendarConsulta);

// Rota para atualizar o status de uma consulta
router.put('/:consultaId', consultaController.atualizarStatusConsulta);

// Rota para filtrar consultas por status e/ou data
router.get('/filtrar', consultaController.filtrarConsultas);

module.exports = router;
