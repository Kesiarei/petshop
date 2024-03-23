const express = require('express');
const router = express.Router();

// Rota para listar todos os clientes
router.get('/', (req, res) => {
    res.send('Listagem de Clientes');
});

// Rota para obter um cliente específico
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Detalhes do Cliente com o ID ${id}`);
});

// Rota para adicionar um novo cliente
router.post('/', (req, res) => {
    // Lógica para adicionar um novo cliente
    res.send('Adicionar um novo cliente');
});

// Rota para atualizar os dados de um cliente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para atualizar os dados do cliente com o ID fornecido
    res.send(`Atualizar o Cliente com o ID ${id}`);
});

// Rota para excluir um cliente
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para excluir o cliente com o ID fornecido
    res.send(`Excluir o Cliente com o ID ${id}`);
});

module.exports = router;
